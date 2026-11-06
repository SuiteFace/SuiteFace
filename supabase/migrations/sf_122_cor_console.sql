-- SuiteFace COR console: Compliance → Operations → Reporting for staff.
-- Alerts with UTC deadlines and history, governance vault with policy acknowledgments, obligations calendar,
-- bank statement lines with matching, staff layout preferences, and an audit trail. Every RPC checks the
-- caller's permissions on the server; nothing here is readable through the table API.

-- ---------- permissions ----------
create or replace function private.cor_perms() returns text[]
language sql stable security definer set search_path = '' as $$
  select case m.role
    when 'owner' then array['staff_admin','compliance','support','finance','refund_approval','bank_connection','platform_admin']
    when 'accounting' then array['finance','refund_approval']
    when 'pitboss' then array['compliance','support']
    when 'dealer' then array['support']
    else array[]::text[] end
  from public.members m where m.user_id = (select auth.uid())
$$;

create or replace function private.cor_require(p text) returns uuid
language plpgsql stable security definer set search_path = '' as $$
declare me uuid; perms text[];
begin
  select id into me from public.members where user_id = (select auth.uid());
  perms := coalesce(private.cor_perms(), array[]::text[]);
  if me is null or cardinality(perms) = 0 then raise exception 'The console is for SuiteFace staff.'; end if;
  if p is not null and not (p = any(perms)) then raise exception 'Your role does not include %.', replace(p, '_', ' '); end if;
  return me;
end $$;

-- ---------- audit ----------
create table if not exists public.cor_audit (
  id bigint generated always as identity primary key,
  at timestamptz not null default now(),
  actor uuid,
  action text not null,
  subject_type text,
  subject_id text,
  detail jsonb not null default '{}'::jsonb
);
alter table public.cor_audit enable row level security;
create index if not exists cor_audit_at on public.cor_audit (at desc);

create or replace function private.cor_log(p_actor uuid, p_action text, p_type text, p_id text, p_detail jsonb default '{}'::jsonb)
returns void language sql security definer set search_path = '' as $$
  insert into public.cor_audit(actor, action, subject_type, subject_id, detail) values (p_actor, p_action, p_type, p_id, coalesce(p_detail, '{}'::jsonb));
$$;

-- ---------- preferences (timezone, quiet hours, layout) ----------
create table if not exists public.cor_prefs (
  member_id uuid primary key references public.members(id) on delete cascade,
  tz text not null default 'America/Chicago',
  quiet_start time,
  quiet_end time,
  layout jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.cor_prefs enable row level security;

-- ---------- alerts ----------
create table if not exists public.cor_rules (
  rule text primary key,
  label text not null,
  section text not null check (section in ('compliance','operations','reporting')),
  perm text not null,
  base_severity text not null default 'info' check (base_severity in ('immediate','past_due','due_soon','info')),
  horizon interval not null default interval '24 hours',
  due_after interval not null default interval '24 hours',
  enabled boolean not null default true,
  link text
);
alter table public.cor_rules enable row level security;

insert into public.cor_rules(rule, label, section, perm, base_severity, horizon, due_after, link) values
  ('joker_review',     'Lobby Joker waiting for house review', 'compliance', 'compliance', 'info', '12 hours', '24 hours', '#compliance/review-policy'),
  ('joker_challenge',  'Joker challenge to rule on',          'compliance', 'compliance', 'info', '24 hours', '72 hours', '#compliance/review-policy'),
  ('safety_report',    'Member safety report',                'operations', 'support',    'immediate', '2 hours', '4 hours', '#operations/reviews'),
  ('feedback',         'Feedback form to answer',             'operations', 'support',    'info', '24 hours', '48 hours', '#operations/reviews'),
  ('pair_review',      'Pair flagged for review',             'operations', 'support',    'info', '24 hours', '48 hours', '#operations/customers'),
  ('email_failed',     'Member email failed to send',         'operations', 'platform_admin', 'due_soon', '4 hours', '12 hours', '#operations/integrations'),
  ('payout_approval',  'Staff payout waiting for approval',   'operations', 'finance',    'info', '48 hours', '7 days', '#operations/payments'),
  ('hr_check',         'High Roller balance check to decide', 'compliance', 'compliance', 'info', '24 hours', '72 hours', '#operations/customers'),
  ('card_back_draft',  'Card backs waiting for owner approval','operations','platform_admin', 'info', '7 days', '30 days', '#operations/marketing'),
  ('vault_review',     'Governance document review due',      'compliance', 'compliance', 'info', '30 days', '0 days', '#compliance/vault'),
  ('policy_ack',       'Policy not yet acknowledged',         'compliance', 'staff_admin','info', '7 days', '14 days', '#compliance/policies'),
  ('obligation',       'Obligation coming due',               'compliance', 'compliance', 'info', '30 days', '0 days', '#compliance/obligations'),
  ('ledger_unbalanced','Ledger does not balance',             'reporting',  'finance',    'immediate', '1 hour', '1 hour', '#reporting/trial-balance'),
  ('manual',           'Staff task',                          'operations', 'support',    'info', '24 hours', '0 days', '#operations/alerts')
on conflict (rule) do nothing;

create table if not exists public.cor_alerts (
  id bigint generated always as identity primary key,
  rule text not null references public.cor_rules(rule),
  scope text not null default 'suiteface',
  subject_type text,
  subject_id text,
  title text not null,
  detail text,
  severity text not null default 'info' check (severity in ('immediate','past_due','due_soon','info')),
  severity_changed_at timestamptz not null default now(),
  owner_id uuid references public.members(id) on delete set null,
  due_at timestamptz,
  origin_tz text not null default 'America/Chicago',
  dedupe_key text not null unique,
  status text not null default 'open' check (status in ('open','acknowledged','snoozed','resolved')),
  snooze_until timestamptz,
  snooze_reason text,
  link text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  resolved_at timestamptz,
  seen_by uuid[] not null default '{}'
);
alter table public.cor_alerts enable row level security;
create index if not exists cor_alerts_open on public.cor_alerts (status, due_at) where status <> 'resolved';

create table if not exists public.cor_alert_events (
  id bigint generated always as identity primary key,
  alert_id bigint not null references public.cor_alerts(id) on delete cascade,
  at timestamptz not null default now(),
  actor uuid,
  action text not null,
  note text
);
alter table public.cor_alert_events enable row level security;

create or replace function private.cor_rank(s text) returns int language sql immutable as $$
  select case s when 'immediate' then 4 when 'past_due' then 3 when 'due_soon' then 2 else 1 end
$$;

-- Raise or refresh one alert. Idempotent on dedupe_key; reopens nothing that a person resolved by hand unless reopen.
create or replace function private.cor_raise(p_rule text, p_key text, p_title text, p_detail text, p_type text, p_id text, p_created timestamptz, p_link text default null)
returns void language plpgsql security definer set search_path = '' as $$
declare r public.cor_rules; due timestamptz; sev text; cur public.cor_alerts;
begin
  select * into r from public.cor_rules where rule = p_rule and enabled;
  if not found then return; end if;
  due := coalesce(p_created, now()) + r.due_after;
  sev := case when r.base_severity = 'immediate' then 'immediate'
              when due < now() then 'past_due'
              when due < now() + r.horizon then 'due_soon'
              else r.base_severity end;
  select * into cur from public.cor_alerts where dedupe_key = p_key;
  if not found then
    insert into public.cor_alerts(rule, subject_type, subject_id, title, detail, severity, due_at, dedupe_key, link)
    values (p_rule, p_type, p_id, p_title, p_detail, sev, due, p_key, coalesce(p_link, r.link));
    insert into public.cor_alert_events(alert_id, action, note) select id, 'raised', sev from public.cor_alerts where dedupe_key = p_key;
  elsif cur.status <> 'resolved' then
    if private.cor_rank(sev) > private.cor_rank(cur.severity) then
      update public.cor_alerts set severity = sev, severity_changed_at = now(), updated_at = now(), seen_by = '{}' where id = cur.id;
      insert into public.cor_alert_events(alert_id, action, note) values (cur.id, 'escalated', cur.severity || ' → ' || sev);
    end if;
    if cur.status = 'snoozed' and cur.snooze_until <= now() then
      update public.cor_alerts set status = 'open', snooze_until = null, updated_at = now() where id = cur.id;
      insert into public.cor_alert_events(alert_id, action, note) values (cur.id, 'snooze ended', null);
    end if;
  end if;
end $$;

-- The deadline sweep: reads the live queues and keeps alerts in step. Runs every 5 minutes.
create or replace function private.cor_sweep() returns int
language plpgsql security definer set search_path = '' as $$
declare n int := 0; x record; keys text[] := '{}';
begin
  for x in select id, created_at from public.joker_submissions where status in ('pending','review','pending_review','needs_review') loop
    perform private.cor_raise('joker_review', 'joker_review:' || x.id, 'Lobby Joker waiting for house review', 'Check proof, direct connection and the six reasons before anyone sees it.', 'joker_submission', x.id::text, x.created_at);
    keys := keys || ('joker_review:' || x.id); end loop;
  for x in select id, filed_at from public.joker_challenges where outcome is null or outcome in ('pending','review') loop
    perform private.cor_raise('joker_challenge', 'joker_challenge:' || x.id, 'Joker challenge to rule on', 'Default-accept rules apply after the window.', 'joker_challenge', x.id::text, x.filed_at);
    keys := keys || ('joker_challenge:' || x.id); end loop;
  for x in select id, at, reason from public.bluff_reports where coalesce(status, 'open') in ('open','new','pending') loop
    perform private.cor_raise('safety_report', 'bluff_report:' || x.id, 'Bluff Table report: ' || coalesce(x.reason, 'no reason given'), null, 'bluff_report', x.id::text, x.at);
    keys := keys || ('bluff_report:' || x.id); end loop;
  for x in select id, at, reason from public.lounge_reports where coalesce(status, 'open') in ('open','new','pending') loop
    perform private.cor_raise('safety_report', 'lounge_report:' || x.id, 'Lounge report: ' || coalesce(x.reason, 'no reason given'), null, 'lounge_report', x.id::text, x.at);
    keys := keys || ('lounge_report:' || x.id); end loop;
  for x in select message_id, reporter_id, at, reason from public.table_message_reports where coalesce(status, 'open') in ('open','new','pending') loop
    perform private.cor_raise('safety_report', 'table_report:' || x.message_id || ':' || x.reporter_id, 'Table message report: ' || coalesce(x.reason, 'no reason given'), null, 'table_report', x.message_id::text, x.at);
    keys := keys || ('table_report:' || x.message_id || ':' || x.reporter_id); end loop;
  for x in select id, created_at, ticket from public.site_forms where form_type = 'FEEDBACK' and status = 'new' loop
    perform private.cor_raise('feedback', 'feedback:' || x.id, 'Feedback ' || coalesce(x.ticket, '#' || x.id) || ' needs a reply', null, 'site_form', x.id::text, x.created_at);
    keys := keys || ('feedback:' || x.id); end loop;
  for x in select id, created_at, reason from public.pair_reviews where coalesce(status, 'open') in ('open','new','pending') loop
    perform private.cor_raise('pair_review', 'pair_review:' || x.id, 'Pair flagged: ' || coalesce(x.reason, 'review'), null, 'pair_review', x.id::text, x.created_at);
    keys := keys || ('pair_review:' || x.id); end loop;
  for x in select id, created_at, kind, last_error from private.email_outbox where status = 'failed' loop
    perform private.cor_raise('email_failed', 'email:' || x.id, 'Email "' || x.kind || '" failed', left(x.last_error, 200), 'email', x.id::text, x.created_at);
    keys := keys || ('email:' || x.id); end loop;
  for x in select id, created_at, amount_cents from public.staff_payouts where status = 'pending' loop
    perform private.cor_raise('payout_approval', 'payout:' || x.id, 'Payout of $' || to_char(x.amount_cents / 100.0, 'FM999,990.00') || ' needs a second approver', null, 'staff_payout', x.id::text, x.created_at);
    keys := keys || ('payout:' || x.id); end loop;
  for x in select id, created_at from public.hr_checks where status in ('pending','submitted','review') loop
    perform private.cor_raise('hr_check', 'hr_check:' || x.id, 'High Roller balance check to decide', null, 'hr_check', x.id::text, x.created_at);
    keys := keys || ('hr_check:' || x.id); end loop;
  if exists (select 1 from public.card_backs where status = 'draft') then
    perform private.cor_raise('card_back_draft', 'card_backs:drafts', (select count(*) from public.card_backs where status = 'draft') || ' card backs waiting for approval', 'Approve or retire them in Card Backs → Owner review.', 'card_backs', 'drafts',
      (select min(created_at) from public.card_backs where status = 'draft'));
    keys := keys || 'card_backs:drafts'::text; end if;
  for x in select id, title, review_on from public.cor_vault_docs where status = 'approved' and review_on is not null and review_on < current_date + 30 loop
    perform private.cor_raise('vault_review', 'vault:' || x.id || ':' || x.review_on, 'Review "' || x.title || '"', 'Review date ' || to_char(x.review_on, 'Mon DD, YYYY'), 'vault_doc', x.id::text, x.review_on::timestamptz);
    keys := keys || ('vault:' || x.id || ':' || x.review_on); end loop;
  for x in select d.id, d.title, d.version, m.id mid, m.handle, d.updated_at from public.cor_vault_docs d cross join public.members m
           where d.requires_ack and d.status = 'approved' and m.role in ('dealer','pitboss','owner','accounting')
             and not exists (select 1 from public.cor_vault_acks a where a.doc_id = d.id and a.member_id = m.id and a.version = d.version) loop
    perform private.cor_raise('policy_ack', 'ack:' || x.id || ':' || x.version || ':' || x.mid, '@' || coalesce(x.handle, 'staff') || ' has not acknowledged "' || x.title || '" v' || x.version, null, 'vault_doc', x.id::text, x.updated_at);
    keys := keys || ('ack:' || x.id || ':' || x.version || ':' || x.mid); end loop;
  for x in select id, title, due_on from public.cor_obligations where status = 'open' and due_on < current_date + 30 loop
    perform private.cor_raise('obligation', 'obligation:' || x.id || ':' || x.due_on, x.title, 'Due ' || to_char(x.due_on, 'Mon DD, YYYY'), 'obligation', x.id::text, x.due_on::timestamptz);
    keys := keys || ('obligation:' || x.id || ':' || x.due_on); end loop;
  if (select coalesce(sum(debit_cents), 0) <> coalesce(sum(credit_cents), 0) from public.gl_lines) then
    perform private.cor_raise('ledger_unbalanced', 'ledger:unbalanced', 'The general ledger does not balance', 'Total debits and credits differ. Open the trial balance.', 'ledger', 'all', now());
    keys := keys || 'ledger:unbalanced'::text; end if;
  -- Everything still open that its source no longer reports is resolved automatically.
  with gone as (
    update public.cor_alerts set status = 'resolved', resolved_at = now(), updated_at = now()
    where status <> 'resolved' and not (dedupe_key = any(keys)) and rule <> 'manual'
    returning id)
  insert into public.cor_alert_events(alert_id, action, note) select id, 'resolved', 'Source cleared' from gone;
  get diagnostics n = row_count;
  -- Time-based escalation for alerts that remain open.
  with esc as (
    select a.id, a.severity old, case when r.base_severity = 'immediate' then 'immediate' when a.due_at < now() then 'past_due' when a.due_at < now() + r.horizon then 'due_soon' else r.base_severity end new
    from public.cor_alerts a join public.cor_rules r using (rule) where a.status <> 'resolved'),
  up as (update public.cor_alerts a set severity = esc.new, severity_changed_at = now(), updated_at = now(), seen_by = '{}' from esc
         where a.id = esc.id and private.cor_rank(esc.new) > private.cor_rank(esc.old) returning a.id, esc.old, esc.new)
  insert into public.cor_alert_events(alert_id, action, note) select id, 'escalated', old || ' → ' || new from up;
  return cardinality(keys);
end $$;

-- ---------- governance vault ----------
create table if not exists public.cor_vault_docs (
  id uuid primary key default gen_random_uuid(),
  entity text not null default 'SuiteFace Inc.',
  category text not null check (category in ('formation','bylaws','minutes','resolution','registration','license','insurance','handbook','policy','procedure','training','contract','tax','other')),
  title text not null,
  version int not null default 1,
  effective_on date,
  review_on date,
  owner_id uuid references public.members(id) on delete set null,
  status text not null default 'draft' check (status in ('draft','approved','retired')),
  requires_ack boolean not null default false,
  confidential boolean not null default true,
  legal_hold boolean not null default false,
  storage_path text,
  file_name text,
  notes text,
  created_by uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.cor_vault_docs enable row level security;

create table if not exists public.cor_vault_acks (
  doc_id uuid not null references public.cor_vault_docs(id) on delete cascade,
  member_id uuid not null references public.members(id) on delete cascade,
  version int not null,
  at timestamptz not null default now(),
  primary key (doc_id, member_id, version)
);
alter table public.cor_vault_acks enable row level security;

insert into storage.buckets (id, name, public, file_size_limit) values ('cor-vault', 'cor-vault', false, 26214400)
on conflict (id) do nothing;

-- Staff with compliance permission may upload into the vault; reads go through short-lived signed URLs only.
drop policy if exists "cor vault upload" on storage.objects;
create policy "cor vault upload" on storage.objects for insert to authenticated
  with check (bucket_id = 'cor-vault' and 'compliance' = any(coalesce(private.cor_perms(), array[]::text[])));
drop policy if exists "cor vault read" on storage.objects;
create policy "cor vault read" on storage.objects for select to authenticated
  using (bucket_id = 'cor-vault' and (
    'compliance' = any(coalesce(private.cor_perms(), array[]::text[]))
    or exists (select 1 from public.cor_vault_docs d where d.storage_path = name and not d.confidential and d.status = 'approved' and cardinality(coalesce(private.cor_perms(), array[]::text[])) > 0)));

-- ---------- obligations calendar ----------
create table if not exists public.cor_obligations (
  id bigint generated always as identity primary key,
  title text not null,
  category text not null default 'filing',
  due_on date not null,
  recurrence text not null default 'none' check (recurrence in ('none','monthly','quarterly','yearly')),
  owner_id uuid references public.members(id) on delete set null,
  status text not null default 'open' check (status in ('open','done')),
  notes text,
  created_at timestamptz not null default now()
);
alter table public.cor_obligations enable row level security;

insert into public.cor_obligations(title, category, due_on, recurrence, notes)
select * from (values
  ('Florida annual report (Sunbiz)', 'filing', make_date(extract(year from now())::int + case when now()::date > make_date(extract(year from now())::int, 5, 1) then 1 else 0 end, 5, 1), 'yearly', 'Filed with the Florida Division of Corporations. Late fee after May 1.'),
  ('Form 1120-S (S corporation return)', 'tax', make_date(extract(year from now())::int + 1, 3, 15), 'yearly', 'Federal S corporation return. Confirm the date with your CPA.'),
  ('1099-NEC to contractors and IRS', 'tax', make_date(extract(year from now())::int + 1, 1, 31), 'yearly', 'Dealers and Pit Bosses paid $600 or more. Totals are in Finance → 1099 summary.'),
  ('Patent: nonprovisional deadline check', 'ip', (now() + interval '60 days')::date, 'none', 'Confirm the 12-month date from the provisional filing with the patent attorney.')
) v(title, category, due_on, recurrence, notes)
where not exists (select 1 from public.cor_obligations);

-- ---------- campaigns (marketing and social) ----------
create table if not exists public.cor_campaigns (
  id bigint generated always as identity primary key,
  name text not null,
  channel text not null,
  owner_id uuid references public.members(id) on delete set null,
  starts_on date,
  ends_on date,
  tz text not null default 'America/Chicago',
  budget_cents bigint not null default 0,
  spend_cents bigint not null default 0,
  utm_campaign text not null,
  promo text,
  status text not null default 'draft' check (status in ('draft','live','ended')),
  notes text,
  created_at timestamptz not null default now()
);
alter table public.cor_campaigns enable row level security;

-- ================= RPCs =================

create or replace function public.cor_me() returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare me uuid := private.cor_require(null); p public.cor_prefs; m public.members;
begin
  select * into m from public.members where id = me;
  select * into p from public.cor_prefs where member_id = me;
  return jsonb_build_object(
    'member_id', me, 'handle', m.handle, 'role', m.role, 'perms', to_jsonb(private.cor_perms()),
    'tz', coalesce(p.tz, 'America/Chicago'), 'quiet_start', p.quiet_start, 'quiet_end', p.quiet_end, 'layout', coalesce(p.layout, '{}'::jsonb),
    'entity', 'SuiteFace Inc.', 'scope', 'suiteface.com',
    'mfa', (select count(*) from auth.mfa_factors f where f.user_id = (select auth.uid()) and f.status = 'verified'),
    'counts', (select jsonb_object_agg(section, c) from (
      select r.section, count(*) c from public.cor_alerts a join public.cor_rules r using (rule)
      where a.status in ('open','acknowledged') and r.perm = any(private.cor_perms()) group by r.section) q),
    'now', now());
end $$;

create or replace function public.cor_save_prefs(p_tz text, p_layout jsonb, p_quiet_start time default null, p_quiet_end time default null)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare me uuid := private.cor_require(null);
begin
  if p_tz is not null and not exists (select 1 from pg_timezone_names where name = p_tz) then raise exception 'Unknown time zone %', p_tz; end if;
  if p_layout is not null and length(p_layout::text) > 20000 then raise exception 'Layout is too large.'; end if;
  insert into public.cor_prefs(member_id, tz, layout, quiet_start, quiet_end) values (me, coalesce(p_tz, 'America/Chicago'), coalesce(p_layout, '{}'::jsonb), p_quiet_start, p_quiet_end)
  on conflict (member_id) do update set tz = coalesce(p_tz, cor_prefs.tz), layout = coalesce(p_layout, cor_prefs.layout),
    quiet_start = coalesce(p_quiet_start, cor_prefs.quiet_start), quiet_end = coalesce(p_quiet_end, cor_prefs.quiet_end), updated_at = now();
  return jsonb_build_object('ok', true);
end $$;

create or replace function public.cor_alerts_list(p_status text default 'active', p_section text default null, p_limit int default 100)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare me uuid := private.cor_require(null); perms text[] := private.cor_perms();
begin
  return coalesce((select jsonb_agg(x order by private.cor_rank(x->>'severity') desc, x->>'due_at' nulls last) from (
    select jsonb_build_object('id', a.id, 'rule', a.rule, 'label', r.label, 'section', r.section, 'title', a.title, 'detail', a.detail,
      'severity', a.severity, 'severity_changed_at', a.severity_changed_at, 'status', a.status, 'due_at', a.due_at, 'origin_tz', a.origin_tz,
      'owner', (select handle from public.members where id = a.owner_id), 'owner_id', a.owner_id, 'mine', a.owner_id = me,
      'snooze_until', a.snooze_until, 'snooze_reason', a.snooze_reason, 'link', a.link, 'created_at', a.created_at, 'resolved_at', a.resolved_at,
      'unseen', not (me = any(a.seen_by)), 'subject_type', a.subject_type, 'subject_id', a.subject_id,
      'history', (select coalesce(jsonb_agg(jsonb_build_object('at', e.at, 'action', e.action, 'note', e.note, 'by', (select handle from public.members where id = e.actor)) order by e.at desc), '[]'::jsonb) from public.cor_alert_events e where e.alert_id = a.id)) x
    from public.cor_alerts a join public.cor_rules r using (rule)
    where r.perm = any(perms) and (p_section is null or r.section = p_section)
      and case p_status when 'active' then a.status in ('open','acknowledged') or (a.status = 'snoozed' and a.snooze_until <= now())
                        when 'snoozed' then a.status = 'snoozed' when 'resolved' then a.status = 'resolved' else true end
    order by a.created_at desc limit least(greatest(p_limit, 1), 500)) q), '[]'::jsonb);
end $$;

create or replace function public.cor_alert_act(p_id bigint, p_action text, p_note text default null, p_until timestamptz default null, p_owner text default null)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare me uuid := private.cor_require(null); a public.cor_alerts; r public.cor_rules; who uuid;
begin
  select * into a from public.cor_alerts where id = p_id;
  if not found then raise exception 'That alert no longer exists.'; end if;
  select * into r from public.cor_rules where rule = a.rule;
  if not (r.perm = any(private.cor_perms())) then raise exception 'Your role does not cover this alert.'; end if;
  case p_action
    when 'seen' then update public.cor_alerts set seen_by = array_append(seen_by, me) where id = p_id and not (me = any(seen_by)); return jsonb_build_object('ok', true);
    when 'acknowledge' then update public.cor_alerts set status = 'acknowledged', updated_at = now() where id = p_id;
    when 'snooze' then
      if a.severity = 'immediate' then raise exception 'Immediate alerts cannot be snoozed.'; end if;
      if coalesce(trim(p_note), '') = '' then raise exception 'Give a reason to snooze.'; end if;
      if p_until is null or p_until <= now() or p_until > now() + interval '14 days' then raise exception 'Snooze for up to 14 days.'; end if;
      update public.cor_alerts set status = 'snoozed', snooze_until = p_until, snooze_reason = p_note, updated_at = now() where id = p_id;
    when 'assign' then
      select id into who from public.members where lower(handle) = lower(ltrim(coalesce(p_owner, ''), '@')) and role in ('dealer','pitboss','owner','accounting');
      if who is null then raise exception 'No staff member with that @tag.'; end if;
      update public.cor_alerts set owner_id = who, updated_at = now() where id = p_id;
    when 'escalate' then update public.cor_alerts set severity = 'immediate', severity_changed_at = now(), seen_by = '{}', updated_at = now() where id = p_id;
    when 'resolve' then update public.cor_alerts set status = 'resolved', resolved_at = now(), updated_at = now() where id = p_id;
    when 'reopen' then update public.cor_alerts set status = 'open', resolved_at = null, updated_at = now() where id = p_id;
    else raise exception 'Unknown action %', p_action;
  end case;
  insert into public.cor_alert_events(alert_id, actor, action, note) values (p_id, me, p_action, coalesce(p_note, p_owner, to_char(p_until, 'YYYY-MM-DD HH24:MI TZ')));
  perform private.cor_log(me, 'alert.' || p_action, 'alert', p_id::text, jsonb_build_object('note', p_note));
  return jsonb_build_object('ok', true);
end $$;

create or replace function public.cor_alert_create(p_title text, p_detail text, p_due timestamptz, p_tz text)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare me uuid := private.cor_require(null); nid bigint;
begin
  insert into public.cor_alerts(rule, title, detail, severity, due_at, origin_tz, dedupe_key, owner_id, link)
  values ('manual', left(p_title, 160), left(p_detail, 2000), case when p_due < now() + interval '24 hours' then 'due_soon' else 'info' end, p_due, coalesce(p_tz, 'America/Chicago'), 'manual:' || gen_random_uuid(), me, '#operations/alerts')
  returning id into nid;
  insert into public.cor_alert_events(alert_id, actor, action) values (nid, me, 'created');
  return jsonb_build_object('id', nid);
end $$;

create or replace function public.cor_sweep_now() returns jsonb
language plpgsql security definer set search_path = '' as $$
declare me uuid := private.cor_require(null); n int;
begin n := private.cor_sweep(); return jsonb_build_object('active', n, 'at', now()); end $$;

-- Workbench: urgent queue, KPIs with prior-period comparisons, daily trend.
create or replace function public.cor_workbench(p_days int default 30, p_tz text default 'America/Chicago')
returns jsonb language plpgsql security definer set search_path = '' as $$
declare me uuid := private.cor_require(null); d int := least(greatest(coalesce(p_days, 30), 7), 365);
  t1 timestamptz := now(); t0 timestamptz := now() - make_interval(days => d); tp timestamptz := now() - make_interval(days => 2 * d);
  fin boolean := 'finance' = any(private.cor_perms()); tz text := coalesce(p_tz, 'America/Chicago');
  function_result jsonb;
begin
  perform private.cor_sweep();
  function_result := jsonb_build_object(
    'period', jsonb_build_object('days', d, 'from', t0, 'to', t1, 'tz', tz),
    'refreshed_at', now(),
    'kpis', jsonb_build_array(
      jsonb_build_object('key', 'seats', 'label', 'Active seats', 'unit', 'count', 'link', '#operations/customers?seat=active',
        'value', (select count(*) from public.members where not fictional and deleted_at is null and seat_until > t1),
        'prior', (select count(*) from public.members where not fictional and deleted_at is null and seat_until > t0 and coalesce(membership_since, created_at) <= t0),
        'def', 'Real members whose $21 seat is still inside its 365 days. Fictional and deleted accounts are left out.'),
      jsonb_build_object('key', 'signups', 'label', 'New members', 'unit', 'count', 'link', '#operations/customers?sort=new',
        'value', (select count(*) from public.members where not fictional and created_at > t0),
        'prior', (select count(*) from public.members where not fictional and created_at between tp and t0),
        'def', 'Accounts created in the period, against the period before it.'),
      jsonb_build_object('key', 'mrr', 'label', 'Seat MRR', 'unit', 'usd', 'link', '#reporting/kpis',
        'value', (select round(count(*) * 2100 / 12.0) from public.members m where not m.fictional and m.seat_until > t1 and exists (select 1 from public.billing_events b where b.member_id = m.id and b.outcome in ('seat_year','seat','membership') and b.stripe_event_id not like 'evt_comp%')),
        'prior', (select round(count(*) * 2100 / 12.0) from public.members m where not m.fictional and m.seat_until > t0 and exists (select 1 from public.billing_events b where b.member_id = m.id and b.outcome in ('seat_year','seat','membership') and b.received_at <= t0 and b.stripe_event_id not like 'evt_comp%')),
        'def', 'Paid seats in force × $21 ÷ 12. Comped, demo and trial seats, chips, tax and one-time items are excluded. Recognized revenue is in Financial Statements.'),
      jsonb_build_object('key', 'revenue', 'label', 'Recognized revenue', 'unit', 'usd', 'link', '#reporting/statements', 'restricted', not fin,
        'value', case when fin then (select coalesce(sum(l.credit_cents - l.debit_cents), 0) from public.gl_lines l join public.gl_entries e on e.id = l.entry_id join public.gl_accounts a on a.code = l.account where a.type = 'revenue' and e.entry_date > (t0 at time zone tz)::date) end,
        'prior', case when fin then (select coalesce(sum(l.credit_cents - l.debit_cents), 0) from public.gl_lines l join public.gl_entries e on e.id = l.entry_id join public.gl_accounts a on a.code = l.account where a.type = 'revenue' and e.entry_date > (tp at time zone tz)::date and e.entry_date <= (t0 at time zone tz)::date) end,
        'def', 'Revenue accounts 4000–4090 posted to the general ledger, before refunds and bonus-chip discounts.'),
      jsonb_build_object('key', 'churn', 'label', 'Seats lapsed', 'unit', 'count', 'link', '#operations/customers?seat=lapsed', 'invert', true,
        'value', (select count(*) from public.members where not fictional and seat_until between t0 and t1),
        'prior', (select count(*) from public.members where not fictional and seat_until between tp and t0),
        'def', 'Seats whose 365 days ended in the period without renewal.'),
      jsonb_build_object('key', 'pairs', 'label', 'Pairs made', 'unit', 'count', 'link', '#reporting/kpis',
        'value', (select count(*) from public.hands where paired_at > t0),
        'prior', (select count(*) from public.hands where paired_at between tp and t0),
        'def', 'Two members who played each other''s cards, in the period.')),
    'trend', (select coalesce(jsonb_agg(jsonb_build_object('day', g::date, 'signups',
                (select count(*) from public.members where not fictional and (created_at at time zone tz)::date = g::date),
                'pairs', (select count(*) from public.hands where (paired_at at time zone tz)::date = g::date)) order by g), '[]'::jsonb)
              from generate_series((t0 at time zone tz)::date, (t1 at time zone tz)::date, interval '1 day') g),
    'alerts', public.cor_alerts_list('active', null, 50),
    'aging', (select jsonb_build_object(
        'under_1d', count(*) filter (where a.created_at > now() - interval '1 day'),
        'd1_3', count(*) filter (where a.created_at between now() - interval '3 days' and now() - interval '1 day'),
        'd3_7', count(*) filter (where a.created_at between now() - interval '7 days' and now() - interval '3 days'),
        'over_7d', count(*) filter (where a.created_at < now() - interval '7 days'))
      from public.cor_alerts a join public.cor_rules r using (rule) where a.status in ('open','acknowledged') and r.perm = any(private.cor_perms())));
  return function_result;
end $$;

create or replace function public.cor_members(p_q text default null, p_filter text default null, p_sort text default 'new', p_page int default 1, p_size int default 25)
returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare me uuid := private.cor_require('support'); is_owner boolean := 'staff_admin' = any(private.cor_perms());
  sz int := least(greatest(coalesce(p_size, 25), 5), 100); pg int := greatest(coalesce(p_page, 1), 1); q text := nullif(trim(coalesce(p_q, '')), ''); res jsonb;
begin
  with base as (
      select m.*, (select email::text from auth.users u where u.id = m.user_id) email from public.members m
      where m.deleted_at is null
        and (q is null or m.handle ilike '%' || q || '%' or m.face_name ilike '%' || q || '%' or (is_owner and exists (select 1 from auth.users u where u.id = m.user_id and u.email ilike '%' || q || '%')))
        and case coalesce(p_filter, '') when 'active' then m.seat_until > now() when 'lapsed' then m.seat_until < now()
             when 'staff' then m.role <> 'player' when 'fictional' then m.fictional when 'flagged' then m.review_hold or m.banned_at is not null
             when 'hr' then private.is_high_roller(m.id) when 'real' then not m.fictional else true end)
    select jsonb_build_object('total', (select count(*) from base), 'page', pg, 'size', sz,
      'rows', coalesce((select jsonb_agg(r) from (select jsonb_build_object('id', b.id, 'handle', b.handle, 'name', b.face_name, 'email', case when is_owner then b.email end,
          'role', b.role, 'membership', b.membership, 'seat_until', b.seat_until, 'deck_until', b.deck_until, 'created_at', b.created_at, 'last_seen_at', b.last_seen_at,
          'fictional', b.fictional, 'id_verified', b.id_verified, 'photo_verified', b.photo_verified, 'hold', b.review_hold, 'banned', b.banned_at is not null,
          'hr', b.high_roller, 'zip', b.home_zip, 'suit', b.style_suit, 'photo', b.photo_url) r
        from base b order by case when p_sort = 'name' then b.handle end, case when p_sort = 'seen' then b.last_seen_at end desc nulls last, b.created_at desc
        offset (pg - 1) * sz limit sz) x), '[]'::jsonb) into res;
  return res;
end $$;

create or replace function public.cor_payments(p_page int default 1, p_size int default 25, p_q text default null)
returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare me uuid := private.cor_require('finance'); sz int := least(greatest(coalesce(p_size, 25), 5), 100); pg int := greatest(coalesce(p_page, 1), 1); res jsonb;
begin
  with base as (select b.*, m.handle from public.billing_events b left join public.members m on m.id = b.member_id
                        where p_q is null or b.type ilike '%' || p_q || '%' or b.outcome ilike '%' || p_q || '%' or m.handle ilike '%' || p_q || '%')
    select jsonb_build_object('total', (select count(*) from base), 'page', pg, 'size', sz,
      'rows', coalesce((select jsonb_agg(jsonb_build_object('id', b.stripe_event_id, 'type', b.type, 'outcome', b.outcome, 'handle', b.handle, 'at', b.received_at,
          'comp', b.stripe_event_id like 'evt_comp%', 'amount', coalesce((b.payload->'data'->'object'->>'amount_total')::bigint, (b.payload->'data'->'object'->>'amount')::bigint),
          'livemode', b.payload->'data'->'object'->'livemode') order by b.received_at desc) from (select * from base order by received_at desc offset (pg - 1) * sz limit sz) b), '[]'::jsonb),
      'payouts', (select coalesce(jsonb_agg(jsonb_build_object('id', p.id, 'payee', (select handle from public.members where id = p.payee_id), 'kind', p.kind, 'period', p.period,
          'cents', p.amount_cents, 'status', p.status, 'created_at', p.created_at) order by p.created_at desc), '[]'::jsonb) from public.staff_payouts p) into res;
  return res;
end $$;

create or replace function public.cor_cases() returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare me uuid := private.cor_require('support');
begin
  return jsonb_build_object(
    'feedback', (select coalesce(jsonb_agg(jsonb_build_object('id', id, 'ticket', ticket, 'type', form_type, 'email', email, 'status', status, 'at', created_at, 'data', data) order by created_at desc), '[]'::jsonb)
                 from (select * from public.site_forms where form_type in ('FEEDBACK','CONTACT','PARTNER') order by created_at desc limit 200) f),
    'reports', (select coalesce(jsonb_agg(x order by x->>'at' desc), '[]'::jsonb) from (
        select jsonb_build_object('kind', 'Bluff Table', 'id', id::text, 'reason', reason, 'note', note, 'status', coalesce(status, 'open'), 'at', at) x from public.bluff_reports
        union all select jsonb_build_object('kind', 'Lounge', 'id', id::text, 'reason', reason, 'note', note, 'status', coalesce(status, 'open'), 'at', at) from public.lounge_reports
        union all select jsonb_build_object('kind', 'Table message', 'id', message_id::text, 'reason', reason, 'note', ruling_note, 'status', coalesce(status, 'open'), 'at', at) from public.table_message_reports
        union all select jsonb_build_object('kind', 'Pair review', 'id', id::text, 'reason', reason, 'note', null, 'status', coalesce(status, 'open'), 'at', created_at) from public.pair_reviews) q),
    'jokers', (select coalesce(jsonb_agg(jsonb_build_object('id', id, 'reasons', reasons, 'status', status, 'at', created_at, 'evidence', cardinality(coalesce(evidence_paths, '{}'))) order by created_at desc), '[]'::jsonb) from public.joker_submissions));
end $$;

create or replace function public.cor_form_status(p_id bigint, p_status text)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare me uuid := private.cor_require('support');
begin
  if p_status not in ('new','replied','closed','spam') then raise exception 'Pick new, replied, closed or spam.'; end if;
  update public.site_forms set status = p_status where id = p_id;
  perform private.cor_log(me, 'form.status', 'site_form', p_id::text, jsonb_build_object('status', p_status));
  perform private.cor_sweep();
  return jsonb_build_object('ok', true);
end $$;

-- Vault
create or replace function public.cor_vault_list() returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare me uuid := private.cor_require(null); comp boolean := 'compliance' = any(private.cor_perms());
begin
  return coalesce((select jsonb_agg(jsonb_build_object('id', d.id, 'entity', d.entity, 'category', d.category, 'title', d.title, 'version', d.version,
      'effective_on', d.effective_on, 'review_on', d.review_on, 'status', d.status, 'requires_ack', d.requires_ack, 'confidential', d.confidential,
      'legal_hold', d.legal_hold, 'has_file', d.storage_path is not null, 'file_name', d.file_name, 'notes', d.notes, 'owner', (select handle from public.members where id = d.owner_id),
      'updated_at', d.updated_at,
      'my_ack', (select at from public.cor_vault_acks a where a.doc_id = d.id and a.member_id = me and a.version = d.version),
      'acks', (select count(*) from public.cor_vault_acks a where a.doc_id = d.id and a.version = d.version),
      'staff', (select count(*) from public.members where role in ('dealer','pitboss','owner','accounting'))) order by d.category, d.title)
    from public.cor_vault_docs d where comp or (d.status = 'approved' and not d.confidential)), '[]'::jsonb);
end $$;

create or replace function public.cor_vault_save(p jsonb) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare me uuid := private.cor_require('compliance'); d public.cor_vault_docs; nid uuid; bump boolean;
begin
  if coalesce(trim(p->>'title'), '') = '' then raise exception 'Give the document a title.'; end if;
  if p ? 'id' and nullif(p->>'id', '') is not null then
    select * into d from public.cor_vault_docs where id = (p->>'id')::uuid;
    if not found then raise exception 'That document no longer exists.'; end if;
    bump := coalesce((p->>'new_version')::boolean, false) or (p->>'storage_path' is not null and p->>'storage_path' is distinct from d.storage_path);
    update public.cor_vault_docs set entity = coalesce(p->>'entity', entity), category = coalesce(p->>'category', category), title = p->>'title',
      version = version + case when bump then 1 else 0 end, effective_on = nullif(p->>'effective_on', '')::date, review_on = nullif(p->>'review_on', '')::date,
      status = coalesce(p->>'status', status), requires_ack = coalesce((p->>'requires_ack')::boolean, requires_ack), confidential = coalesce((p->>'confidential')::boolean, confidential),
      legal_hold = coalesce((p->>'legal_hold')::boolean, legal_hold), storage_path = coalesce(p->>'storage_path', storage_path), file_name = coalesce(p->>'file_name', file_name),
      notes = p->>'notes', updated_at = now() where id = d.id;
    nid := d.id;
  else
    insert into public.cor_vault_docs(entity, category, title, effective_on, review_on, status, requires_ack, confidential, storage_path, file_name, notes, owner_id, created_by)
    values (coalesce(p->>'entity', 'SuiteFace Inc.'), coalesce(p->>'category', 'policy'), p->>'title', nullif(p->>'effective_on', '')::date, nullif(p->>'review_on', '')::date,
      coalesce(p->>'status', 'draft'), coalesce((p->>'requires_ack')::boolean, false), coalesce((p->>'confidential')::boolean, true), p->>'storage_path', p->>'file_name', p->>'notes', me, me)
    returning id into nid;
  end if;
  perform private.cor_log(me, 'vault.save', 'vault_doc', nid::text, p - 'notes');
  perform private.cor_sweep();
  return jsonb_build_object('id', nid);
end $$;

create or replace function public.cor_vault_retire(p_id uuid) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare me uuid := private.cor_require('compliance');
begin
  if (select legal_hold from public.cor_vault_docs where id = p_id) then raise exception 'This document is on legal hold.'; end if;
  update public.cor_vault_docs set status = 'retired', updated_at = now() where id = p_id;
  perform private.cor_log(me, 'vault.retire', 'vault_doc', p_id::text);
  return jsonb_build_object('ok', true);
end $$;

create or replace function public.cor_vault_ack(p_id uuid) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare me uuid := private.cor_require(null); d public.cor_vault_docs;
begin
  select * into d from public.cor_vault_docs where id = p_id and status = 'approved';
  if not found then raise exception 'Only approved documents can be acknowledged.'; end if;
  insert into public.cor_vault_acks(doc_id, member_id, version) values (p_id, me, d.version) on conflict do nothing;
  perform private.cor_log(me, 'vault.ack', 'vault_doc', p_id::text, jsonb_build_object('version', d.version));
  perform private.cor_sweep();
  return jsonb_build_object('ok', true, 'version', d.version);
end $$;

create or replace function public.cor_vault_open(p_id uuid) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare me uuid := private.cor_require(null); d public.cor_vault_docs;
begin
  select * into d from public.cor_vault_docs where id = p_id;
  if not found or d.storage_path is null then raise exception 'No file on this document.'; end if;
  if d.confidential and not ('compliance' = any(private.cor_perms())) then raise exception 'This document is restricted.'; end if;
  perform private.cor_log(me, 'vault.open', 'vault_doc', p_id::text, jsonb_build_object('version', d.version));
  return jsonb_build_object('path', d.storage_path, 'name', d.file_name);
end $$;

-- Obligations
create or replace function public.cor_obligations_list() returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare me uuid := private.cor_require('compliance');
begin
  return coalesce((select jsonb_agg(jsonb_build_object('id', id, 'title', title, 'category', category, 'due_on', due_on, 'recurrence', recurrence, 'status', status,
    'notes', notes, 'owner', (select handle from public.members where id = o.owner_id)) order by status, due_on) from public.cor_obligations o), '[]'::jsonb);
end $$;

create or replace function public.cor_obligation_save(p jsonb) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare me uuid := private.cor_require('compliance'); nid bigint; o public.cor_obligations;
begin
  if p->>'action' = 'done' then
    select * into o from public.cor_obligations where id = (p->>'id')::bigint;
    update public.cor_obligations set status = 'done' where id = o.id;
    if o.recurrence <> 'none' then
      insert into public.cor_obligations(title, category, due_on, recurrence, owner_id, notes)
      values (o.title, o.category, (o.due_on + case o.recurrence when 'monthly' then interval '1 month' when 'quarterly' then interval '3 months' else interval '1 year' end)::date, o.recurrence, o.owner_id, o.notes);
    end if;
    nid := o.id;
  elsif nullif(p->>'id', '') is not null then
    update public.cor_obligations set title = p->>'title', category = coalesce(p->>'category', category), due_on = (p->>'due_on')::date,
      recurrence = coalesce(p->>'recurrence', recurrence), notes = p->>'notes' where id = (p->>'id')::bigint returning id into nid;
  else
    if coalesce(trim(p->>'title'), '') = '' or nullif(p->>'due_on', '') is null then raise exception 'Give a title and a due date.'; end if;
    insert into public.cor_obligations(title, category, due_on, recurrence, notes, owner_id) values (p->>'title', coalesce(p->>'category', 'filing'), (p->>'due_on')::date, coalesce(p->>'recurrence', 'none'), p->>'notes', me) returning id into nid;
  end if;
  perform private.cor_log(me, 'obligation.save', 'obligation', nid::text, p);
  perform private.cor_sweep();
  return jsonb_build_object('id', nid);
end $$;

-- Staff & access
create or replace function public.cor_staff() returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare me uuid := private.cor_require('staff_admin');
begin
  return coalesce((select jsonb_agg(jsonb_build_object('id', m.id, 'handle', m.handle, 'name', m.face_name, 'email', u.email, 'role', m.role,
      'mfa', (select count(*) from auth.mfa_factors f where f.user_id = u.id and f.status = 'verified'), 'last_sign_in', u.last_sign_in_at,
      'since', (select max(at) from public.staff_role_log l where l.member_id = m.id),
      'acks_missing', (select count(*) from public.cor_vault_docs d where d.requires_ack and d.status = 'approved' and not exists (select 1 from public.cor_vault_acks a where a.doc_id = d.id and a.member_id = m.id and a.version = d.version))) order by m.role, m.handle)
    from public.members m join auth.users u on u.id = m.user_id where m.role in ('dealer','pitboss','owner','accounting')), '[]'::jsonb);
end $$;

create or replace function public.cor_audit_list(p_limit int default 200) returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare me uuid := private.cor_require('compliance');
begin
  return coalesce((select jsonb_agg(x order by x->>'at' desc) from (
    select jsonb_build_object('at', a.at, 'by', (select handle from public.members where id = a.actor), 'action', a.action, 'subject', coalesce(a.subject_type, '') || ' ' || coalesce(a.subject_id, ''), 'detail', a.detail) x
      from public.cor_audit a order by a.at desc limit least(p_limit, 1000)) q1
    union all select x from (select jsonb_build_object('at', l.at, 'by', (select handle from public.members where id = l.by_member), 'action', 'role.change',
        'subject', '@' || coalesce((select handle from public.members where id = l.member_id), '?'), 'detail', jsonb_build_object('from', l.old_role, 'to', l.new_role, 'note', l.note)) x
      from public.staff_role_log l order by l.at desc limit 200) q2) z), '[]'::jsonb);
end $$;

-- Integrations health
create or replace function public.cor_integrations() returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare me uuid := private.cor_require(null);
begin
  return jsonb_build_array(
    jsonb_build_object('key', 'stripe', 'name', 'Stripe payments', 'last', (select max(received_at) from public.billing_events),
      'detail', (select count(*) || ' events received' from public.billing_events), 'ok', true),
    jsonb_build_object('key', 'email', 'name', 'Member email (Bird)', 'last', (select max(sent_at) from private.email_outbox),
      'detail', (select count(*) filter (where status = 'queued') || ' queued · ' || count(*) filter (where status = 'sent') || ' sent · ' || count(*) filter (where status = 'failed') || ' failed' from private.email_outbox),
      'ok', not exists (select 1 from private.email_outbox where status = 'failed'), 'waiting', (select count(*) filter (where status = 'queued') from private.email_outbox) > 0 and (select max(sent_at) from private.email_outbox) is null),
    jsonb_build_object('key', 'jobs', 'name', 'Scheduled jobs', 'last', (select max(end_time) from cron.job_run_details),
      'detail', (select count(*) || ' jobs · ' || coalesce((select count(*) from cron.job_run_details where status = 'failed' and end_time > now() - interval '24 hours'), 0) || ' failures in 24 h' from cron.job),
      'ok', not exists (select 1 from cron.job_run_details where status = 'failed' and end_time > now() - interval '24 hours')),
    jsonb_build_object('key', 'bank', 'name', 'Banking and reconciliation', 'last', null, 'detail', 'Moves to Ledger Technology', 'ok', true, 'note', 'Bank import and matching live in the Ledger Technology books.'),
    jsonb_build_object('key', 'ledger', 'name', 'General ledger', 'last', (select max(created_at) from public.gl_entries),
      'detail', (select count(*) || ' journal entries' from public.gl_entries), 'ok', (select coalesce(sum(debit_cents), 0) = coalesce(sum(credit_cents), 0) from public.gl_lines)));
end $$;

-- Campaigns
create or replace function public.cor_campaigns_list() returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare me uuid := private.cor_require(null);
begin
  return coalesce((select jsonb_agg(jsonb_build_object('id', c.id, 'name', c.name, 'channel', c.channel, 'starts_on', c.starts_on, 'ends_on', c.ends_on, 'tz', c.tz,
      'budget', c.budget_cents, 'spend', c.spend_cents, 'utm', c.utm_campaign, 'promo', c.promo, 'status', c.status, 'notes', c.notes,
      'owner', (select handle from public.members where id = c.owner_id)) order by c.created_at desc) from public.cor_campaigns c), '[]'::jsonb);
end $$;

create or replace function public.cor_campaign_save(p jsonb) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare me uuid := private.cor_require(null); nid bigint; slug text;
begin
  if coalesce(trim(p->>'name'), '') = '' then raise exception 'Name the campaign.'; end if;
  slug := coalesce(nullif(p->>'utm', ''), regexp_replace(lower(p->>'name'), '[^a-z0-9]+', '-', 'g'));
  if nullif(p->>'id', '') is not null then
    update public.cor_campaigns set name = p->>'name', channel = coalesce(p->>'channel', channel), starts_on = nullif(p->>'starts_on', '')::date, ends_on = nullif(p->>'ends_on', '')::date,
      budget_cents = coalesce(round((p->>'budget')::numeric * 100), budget_cents), spend_cents = coalesce(round((p->>'spend')::numeric * 100), spend_cents),
      utm_campaign = slug, promo = p->>'promo', status = coalesce(p->>'status', status), notes = p->>'notes' where id = (p->>'id')::bigint returning id into nid;
  else
    insert into public.cor_campaigns(name, channel, starts_on, ends_on, budget_cents, spend_cents, utm_campaign, promo, status, notes, owner_id)
    values (p->>'name', coalesce(p->>'channel', 'social'), nullif(p->>'starts_on', '')::date, nullif(p->>'ends_on', '')::date, coalesce(round((p->>'budget')::numeric * 100), 0),
      coalesce(round((p->>'spend')::numeric * 100), 0), slug, p->>'promo', coalesce(p->>'status', 'draft'), p->>'notes', me) returning id into nid;
  end if;
  perform private.cor_log(me, 'campaign.save', 'campaign', nid::text, p);
  return jsonb_build_object('id', nid, 'utm', slug);
end $$;

-- Global search across members, alerts, vault and obligations.
create or replace function public.cor_search(p_q text) returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare me uuid := private.cor_require(null); q text := trim(coalesce(p_q, '')); perms text[] := private.cor_perms();
begin
  if length(q) < 2 then return '[]'::jsonb; end if;
  return coalesce((select jsonb_agg(x) from (
    (select jsonb_build_object('type', 'Member', 'title', '@' || handle, 'sub', coalesce(face_name, ''), 'link', '#operations/customers?q=' || handle) x
       from public.members where 'support' = any(perms) and (handle ilike '%' || q || '%' or face_name ilike '%' || q || '%') limit 6)
    union all (select jsonb_build_object('type', 'Alert', 'title', a.title, 'sub', a.severity || ' · ' || a.status, 'link', '#operations/alerts?id=' || a.id)
       from public.cor_alerts a join public.cor_rules r using (rule) where r.perm = any(perms) and a.title ilike '%' || q || '%' order by a.created_at desc limit 6)
    union all (select jsonb_build_object('type', 'Document', 'title', title, 'sub', category || ' · v' || version, 'link', '#compliance/vault?id=' || id)
       from public.cor_vault_docs where ('compliance' = any(perms) or (status = 'approved' and not confidential)) and title ilike '%' || q || '%' limit 6)
    union all (select jsonb_build_object('type', 'Obligation', 'title', title, 'sub', 'Due ' || to_char(due_on, 'Mon DD, YYYY'), 'link', '#compliance/obligations')
       from public.cor_obligations where 'compliance' = any(perms) and title ilike '%' || q || '%' limit 4)) q2), '[]'::jsonb);
end $$;

-- Lock down: tables only through RPCs; RPCs only for signed-in users.
revoke all on public.cor_audit, public.cor_prefs, public.cor_rules, public.cor_alerts, public.cor_alert_events, public.cor_vault_docs, public.cor_vault_acks,
  public.cor_obligations, public.cor_campaigns from anon, authenticated;
do $$ declare f text; begin
  for f in select p.oid::regprocedure::text from pg_proc p join pg_namespace n on n.oid = p.pronamespace where n.nspname = 'public' and p.proname like 'cor\_%' loop
    execute format('revoke all on function %s from public, anon', f);
    execute format('grant execute on function %s to authenticated', f);
  end loop;
  for f in select p.oid::regprocedure::text from pg_proc p join pg_namespace n on n.oid = p.pronamespace where n.nspname = 'private' and p.proname like 'cor\_%' loop
    execute format('revoke all on function %s from public, anon, authenticated', f);
  end loop;
end $$;
grant execute on function private.cor_perms() to authenticated;

select cron.schedule('sf-cor-sweep', '*/5 * * * *', $$select private.cor_sweep()$$);

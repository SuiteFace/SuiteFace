// SuiteFace High Roller verification.
// "bank": a signed-in member links a bank account through Stripe's secure bank login (balance permission).
// "process": reads balances for linked accounts, totals them toward $1M, and deletes reviewed statements.
// Secret needed: STRIPE_SECRET_KEY. Balances are erased from SuiteFace as soon as a decision is made.
import { createClient } from "jsr:@supabase/supabase-js@2";

const SITE = "https://suiteface.com";
const URL_ = Deno.env.get("SUPABASE_URL")!, ANON = Deno.env.get("SUPABASE_ANON_KEY")!;
const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info", "Access-Control-Allow-Methods": "POST, OPTIONS" };
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { ...CORS, "Content-Type": "application/json" } });
const admin = createClient(URL_, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });

function form(o: Record<string, unknown>, p = "", out: string[] = []): string[] {
  for (const [k, v] of Object.entries(o)) {
    if (v === undefined || v === null) continue;
    const key = p ? `${p}[${k}]` : k;
    if (typeof v === "object") form(v as Record<string, unknown>, key, out);
    else out.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(v)));
  }
  return out;
}
async function stripe(method: string, path: string, body?: Record<string, unknown>, idem?: string) {
  const key = Deno.env.get("STRIPE_SECRET_KEY");
  if (!key) return { error: { message: "not_configured" } };
  const r = await fetch("https://api.stripe.com/v1/" + path, {
    method, headers: { Authorization: "Bearer " + key, "Stripe-Version": "2025-08-27.basil", "Content-Type": "application/x-www-form-urlencoded", ...(idem ? { "Idempotency-Key": idem } : {}) },
    body: body ? form(body).join("&") : undefined,
  });
  return await r.json();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  const body = await req.json().catch(() => ({}));

  if (body.action === "bank") {
    const auth = req.headers.get("authorization") ?? "";
    const user = createClient(URL_, ANON, { global: { headers: { Authorization: auth } }, auth: { persistSession: false } });
    const { data: u } = await user.auth.getUser();
    if (!u?.user) return json({ error: "Sign in first." }, 401);
    const { data: checkId, error } = await user.rpc("start_hr_check", { p_method: "bank" });
    if (error) return json({ error: error.message }, 400);
    const { data: m } = await admin.from("members").select("id, stripe_customer_id").eq("user_id", u.user.id).single();
    let customer = m?.stripe_customer_id;
    if (!customer) {
      const c = await stripe("POST", "customers", { email: u.user.email, metadata: { member_id: m?.id } }, "hr-cus-" + m?.id);
      if (c.error) return json({ error: c.error.message === "not_configured" ? "Bank linking opens soon. You can upload statements instead." : c.error.message }, 503);
      customer = c.id;
      await admin.from("members").update({ stripe_customer_id: customer }).eq("id", m?.id);
    }
    const cs = await stripe("POST", "checkout/sessions", {
      mode: "setup", customer, currency: "usd", payment_method_types: { 0: "us_bank_account" },
      payment_method_options: { us_bank_account: { financial_connections: { permissions: { 0: "payment_method", 1: "balances" } }, verification_method: "instant" } },
      metadata: { sf_link: "hr_bank", check_id: checkId }, setup_intent_data: { metadata: { sf_link: "hr_bank", check_id: checkId } },
      success_url: SITE + "/?highroller=linked#table", cancel_url: SITE + "/?highroller=cancelled",
      custom_text: { submit: { message: "SuiteFace reads this account's balance once to check the High Roller $1M total. You're not charged. The balance is erased after the check." } },
    }, "hr-cs-" + checkId);
    if (cs.error) return json({ error: cs.error.message }, 400);
    return json({ url: cs.url });
  }

  if (body.action === "process") {
    const out: unknown[] = [];
    const { data: rows } = await admin.rpc("hr_bank_queue");
    for (const r of rows ?? []) {
      const si = await stripe("GET", "setup_intents/" + r.setup_intent_id + "?expand[]=payment_method");
      if (si.error) { out.push({ id: r.id, skip: si.error.message }); if (si.error.message === "not_configured") break; continue; }
      const fca = si.payment_method?.us_bank_account?.financial_connections_account;
      if (!fca) { out.push({ id: r.id, skip: "no account" }); continue; }
      let acct = await stripe("GET", "financial_connections/accounts/" + fca);
      if (!acct.balance || acct.balance_refresh?.status !== "succeeded") {
        if (acct.balance_refresh?.status !== "pending") await stripe("POST", "financial_connections/accounts/" + fca + "/refresh", { features: { 0: "balance" } });
        out.push({ id: r.id, waiting: true }); continue; // picked up on the next run
      }
      const cents = acct.balance?.type === "cash" ? Math.max(0, acct.balance?.current?.usd ?? 0) : 0; // credit balances never count
      const label = (acct.institution_name || "Bank") + (acct.last4 ? " ••" + acct.last4 : "");
      const { data: res } = await admin.rpc("hr_bank_result", { p_check: r.id, p_label: label, p_balance_cents: cents });
      out.push({ id: r.id, result: res });
    }
    const { data: files } = await admin.rpc("hr_files_to_delete");
    for (const f of files ?? []) {
      const { error } = await admin.storage.from("hr-statements").remove([f.statement_path]);
      if (!error) await admin.rpc("hr_file_deleted", { p_check: f.id });
    }
    return json({ processed: out, statements_deleted: (files ?? []).length });
  }
  return json({ error: "Unknown action" }, 400);
});

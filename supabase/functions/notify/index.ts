// SuiteFace member email: sends queued messages through Bird from messenger@suiteface.com.
// Called every minute by the database (pg_cron) with a token kept in the Vault. The Bird key lives only in
// the BIRD_API_KEY secret, set by the owner in Supabase. Until it's set, nothing is sent and the queue waits.
import { createClient } from "jsr:@supabase/supabase-js@2";

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { "Content-Type": "application/json" } });
const FROM = { email: "messenger@suiteface.com", name: "SuiteFace" };

Deno.serve(async (req) => {
  const { data: ok } = await db.rpc("check_notify_token", { p: req.headers.get("x-notify-token") ?? "" });
  if (!ok) return json({ error: "Not allowed" }, 403);
  const key = Deno.env.get("BIRD_API_KEY") ?? "";
  if (!/^bk_/.test(key)) return json({ waiting: "BIRD_API_KEY is not set" });
  const region = (key.match(/^bk_([a-z]+\d)_/) || [])[1] || "us1";
  const { data: rows, error } = await db.rpc("outbox_take", { p_limit: 20 });
  if (error) return json({ error: error.message }, 500);
  let sent = 0;
  for (const m of rows ?? []) {
    try {
      const r = await fetch(`https://${region}.platform.bird.com/v1/email/messages`, {
        method: "POST",
        headers: { Authorization: "Bearer " + key, "Content-Type": "application/json", "Idempotency-Key": "sf-outbox-" + m.id },
        body: JSON.stringify({ from: FROM, to: [m.to_email], reply_to: ["messenger@suiteface.com"], subject: m.subject, html: m.html, text: m.text_body,
          category: "transactional", track_opens: false, track_clicks: false, tags: [{ name: "brand", value: "suiteface" }, { name: "kind", value: String(m.kind).replace(/[^A-Za-z0-9_-]/g, "") }] }),
      });
      if (r.ok) { await db.rpc("outbox_mark", { p_id: m.id, p_status: "sent" }); sent++; }
      else { const t = await r.text(); await db.rpc("outbox_mark", { p_id: m.id, p_status: "failed", p_error: (r.status + " " + t).slice(0, 500) }); }
    } catch (e) {
      await db.rpc("outbox_mark", { p_id: m.id, p_status: "failed", p_error: String((e as Error).message ?? e).slice(0, 500) });
    }
  }
  return json({ ok: true, sent });
});

// SuiteFace live camera chat billing. The caller pays $2.10 for the first minute, then $0.21 a minute.
// The database works out the minutes and the amount; this function only collects it.
// A member calls it after hanging up (charges their own ended calls). Staff can call it to collect every pending call.
// Tries the card on file right away; if there isn't one usable, the amount goes on the member's next monthly bill.
// Secret needed: STRIPE_SECRET_KEY.
import { createClient } from "jsr:@supabase/supabase-js@2";

const URL_ = Deno.env.get("SUPABASE_URL")!, ANON = Deno.env.get("SUPABASE_ANON_KEY")!;
const admin = createClient(URL_, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info", "Access-Control-Allow-Methods": "POST, OPTIONS" };
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { ...CORS, "Content-Type": "application/json" } });
const SV = "2025-08-27.basil";

async function stripe(key: string, path: string, method = "GET", body?: Record<string, string>, idem?: string) {
  const headers: Record<string, string> = { Authorization: "Bearer " + key, "Stripe-Version": SV };
  if (body) headers["Content-Type"] = "application/x-www-form-urlencoded";
  if (idem) headers["Idempotency-Key"] = idem;
  const r = await fetch("https://api.stripe.com/v1/" + path, { method, headers, body: body ? new URLSearchParams(body) : undefined });
  return await r.json();
}

async function cardFor(key: string, customer: string): Promise<string | null> {
  const c = await stripe(key, "customers/" + customer);
  const d = c?.invoice_settings?.default_payment_method;
  if (d) return typeof d === "string" ? d : d.id;
  const subs = await stripe(key, "subscriptions?customer=" + customer + "&status=active&limit=1");
  const sp = subs?.data?.[0]?.default_payment_method;
  if (sp) return typeof sp === "string" ? sp : sp.id;
  const pms = await stripe(key, "payment_methods?customer=" + customer + "&type=card&limit=1");
  return pms?.data?.[0]?.id ?? null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  const key = Deno.env.get("STRIPE_SECRET_KEY");
  if (!key) return json({ error: "Billing isn't set up yet." }, 503);
  const user = createClient(URL_, ANON, { global: { headers: { Authorization: req.headers.get("authorization") ?? "" } }, auth: { persistSession: false } });
  const { data: who } = await user.rpc("whoami");
  const me = Array.isArray(who) ? who[0] : null;
  if (!me?.member_id) return json({ error: "Members only." }, 401);
  const staff = ["dealer", "pitboss", "owner"].includes(me.role);
  const body = await req.json().catch(() => ({}));
  const all = staff && body.all === true;
  const { data: rows, error } = await admin.rpc("calls_to_charge_svc", { p_member: all ? null : me.member_id });
  if (error) return json({ error: error.message }, 500);
  const out: unknown[] = [];
  for (const c of rows ?? []) {
    if (!c.customer || !c.cents) { await admin.rpc("call_charge_result_svc", { p_call: c.id, p_status: "failed", p_ref: null, p_note: "No Stripe customer" }); out.push({ id: c.id, status: "failed" }); continue; }
    const desc = "SuiteFace live camera chat with " + (c.other_name ?? "your Pair") + ": " + c.minutes + " min";
    const pm = await cardFor(key, c.customer);
    if (pm) {
      const pi = await stripe(key, "payment_intents", "POST", {
        amount: String(c.cents), currency: "usd", customer: c.customer, payment_method: pm, off_session: "true", confirm: "true",
        description: desc, "metadata[sf_call]": c.id, "metadata[kind]": "camera_chat",
      }, "sf-call-" + c.id);
      if (pi?.status === "succeeded") { await admin.rpc("call_charge_result_svc", { p_call: c.id, p_status: "paid", p_ref: pi.id, p_note: null }); out.push({ id: c.id, status: "paid" }); continue; }
      if (pi?.error?.code && !["authentication_required", "card_declined", "expired_card", "insufficient_funds"].includes(pi.error.code)) {
        await admin.rpc("call_charge_result_svc", { p_call: c.id, p_status: "failed", p_ref: null, p_note: pi.error.message }); out.push({ id: c.id, status: "failed" }); continue;
      }
      if (pi?.error) { await admin.rpc("call_charge_result_svc", { p_call: c.id, p_status: "failed", p_ref: pi.error.payment_intent?.id ?? null, p_note: pi.error.message }); out.push({ id: c.id, status: "failed" }); continue; }
    }
    // No card we can charge now: add it to the next monthly invoice instead.
    const ii = await stripe(key, "invoiceitems", "POST", { customer: c.customer, amount: String(c.cents), currency: "usd", description: desc, "metadata[sf_call]": c.id }, "sf-call-ii-" + c.id);
    if (ii?.id) { await admin.rpc("call_charge_result_svc", { p_call: c.id, p_status: "on_next_bill", p_ref: ii.id, p_note: null }); out.push({ id: c.id, status: "on_next_bill" }); }
    else { await admin.rpc("call_charge_result_svc", { p_call: c.id, p_status: "failed", p_ref: null, p_note: ii?.error?.message ?? "Couldn't bill" }); out.push({ id: c.id, status: "failed" }); }
  }
  return json({ calls: out });
});

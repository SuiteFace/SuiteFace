// SuiteFace Lounge billing. $2.10 per seat for a 21-minute private Lounge; every cent goes to SuiteFace.
// When a player comps the other seat, they pay for both seats.
// A player calls this after their Lounge opens (it charges their own pending seats). Staff can collect every pending seat.
// Tries the card on file first; if it can't be charged now, the seat goes on the player's next monthly bill.
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
  if (!me?.member_id) return json({ error: "Players only." }, 401);
  const staff = ["dealer", "pitboss", "owner"].includes(me.role);
  const body = await req.json().catch(() => ({}));
  const all = staff && body.all === true;
  const { data: rows, error } = await admin.rpc("lounge_charges_svc", { p_member: all ? null : me.member_id });
  if (error) return json({ error: error.message }, 500);
  const out: unknown[] = [];
  const done = async (id: string, status: string, ref: string | null, note: string | null) => {
    await admin.rpc("lounge_charge_result_svc", { p_id: id, p_status: status, p_ref: ref, p_note: note }); out.push({ id, status });
  };
  for (const c of rows ?? []) {
    if (!c.customer) { await done(c.id, "failed", null, "No Stripe customer"); continue; }
    const desc = "SuiteFace Lounge, 21 min with " + (c.other_name ?? "a player") + (c.comp ? " (you comped their seat)" : "");
    const pm = await cardFor(key, c.customer);
    if (pm) {
      const pi = await stripe(key, "payment_intents", "POST", {
        amount: String(c.cents), currency: "usd", customer: c.customer, payment_method: pm, off_session: "true", confirm: "true",
        description: desc, "metadata[sf_lounge_seat]": c.id, "metadata[kind]": "lounge",
      }, "sf-lounge-" + c.id);
      if (pi?.status === "succeeded") { await done(c.id, "paid", pi.id, null); continue; }
      if (pi?.error) { await done(c.id, "failed", pi.error.payment_intent?.id ?? null, pi.error.message ?? "Card declined"); continue; }
    }
    const ii = await stripe(key, "invoiceitems", "POST", { customer: c.customer, amount: String(c.cents), currency: "usd", description: desc, "metadata[sf_lounge_seat]": c.id }, "sf-lounge-ii-" + c.id);
    if (ii?.id) await done(c.id, "on_next_bill", ii.id, null);
    else await done(c.id, "failed", null, ii?.error?.message ?? "Couldn't bill");
  }
  return json({ seats: out });
});

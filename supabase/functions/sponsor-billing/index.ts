// SuiteFace ZIP sponsors: On Deck card saving and auto-charge when a ZIP opens.
// Secret needed (Supabase → Edge Functions → Secrets): STRIPE_SECRET_KEY (a restricted key is best:
// write access to Customers, Checkout Sessions, Subscriptions; read access to Setup Intents).
import { createClient } from "jsr:@supabase/supabase-js@2";

const PRICE_30D = "price_1UROGNHkxiL4jmc8ZMAgbUNe"; // $210 every 30 days (switch to the live price at launch)
const SITE = "https://suiteface.com";
const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info", "Access-Control-Allow-Methods": "POST, OPTIONS" };
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { ...CORS, "Content-Type": "application/json" } });
const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });

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
    method, headers: { Authorization: "Bearer " + key, "Content-Type": "application/x-www-form-urlencoded", ...(idem ? { "Idempotency-Key": idem } : {}) },
    body: body ? form(body).join("&") : undefined,
  });
  return await r.json();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  const body = await req.json().catch(() => ({}));

  // A sponsor whose ZIPs are taken saves a card to go On Deck. Nothing is charged now.
  if (body.action === "card") {
    const { data: s } = await db.rpc("sponsor_card_checkout_info", { p_id: body.id });
    if (!s) return json({ error: "That request expired. Start again." }, 400);
    let customer = s.customer;
    if (!customer) {
      const c = await stripe("POST", "customers", { email: s.email, name: s.business, metadata: { sponsor_id: s.id } }, "cus-" + s.id);
      if (c.error) return json({ error: c.error.message === "not_configured" ? "On Deck opens soon. Email help@suiteface.com to hold your place." : c.error.message }, 503);
      customer = c.id;
    }
    const cs = await stripe("POST", "checkout/sessions", {
      mode: "setup", customer, currency: "usd", payment_method_types: { 0: "card" },
      metadata: { sf_link: "ondeck", sponsor_id: s.id }, setup_intent_data: { metadata: { sf_link: "ondeck", sponsor_id: s.id } },
      success_url: SITE + "/?sponsor=ondeck", cancel_url: SITE + "/?sponsor=cancelled",
      custom_text: { submit: { message: "Saves your card for SuiteFace On Deck. You're charged $210 every 30 days only once a ZIP opens for you, under the Sponsor Agreement you signed." } },
    }, "setup-" + s.id);
    if (cs.error) return json({ error: cs.error.message }, 400);
    return json({ url: cs.url });
  }

  // Charge On Deck sponsors whose ZIP just opened. Safe to call any time: it only acts on rows marked charge_ready.
  if (body.action === "promote") {
    const { data: rows } = await db.rpc("sponsors_to_charge");
    const done: unknown[] = [];
    for (const s of rows ?? []) {
      const si = await stripe("GET", "setup_intents/" + s.setup_intent_id);
      if (si.error) { done.push({ id: s.id, skipped: si.error.message }); if (si.error.message === "not_configured") break; continue; }
      const sub = await stripe("POST", "subscriptions", {
        customer: s.stripe_customer_id, items: { 0: { price: PRICE_30D, quantity: s.packages || 1 } },
        default_payment_method: si.payment_method, off_session: true, payment_behavior: "error_if_incomplete",
        metadata: { sf_link: "zip_sponsor", sponsor_id: s.id },
      }, "ondeck-charge-" + s.id);
      const ok = !sub.error && (sub.status === "active" || sub.status === "trialing");
      await db.rpc("sponsor_charge_result", { p_id: s.id, p_ok: ok, p_subscription: ok ? sub.id : null, p_reason: sub.error?.message ?? sub.status ?? null });
      done.push({ id: s.id, ok });
    }
    return json({ charged: done });
  }
  return json({ error: "Unknown action" }, 400);
});

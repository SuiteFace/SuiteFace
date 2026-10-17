// SuiteFace Casinos: checkout for the $21 Casino build (7 ZIPs included) and $2.10 per extra ZIP code.
// Secret needed: STRIPE_SECRET_KEY. The webhook (stripe-webhook) opens the Casino for Owner review once paid.
import { createClient } from "jsr:@supabase/supabase-js@2";

const PRICE_BUILD = "price_1URPZLHkxiL4jmc87fXCNnSm"; // $21.00 one-time (switch to the live price at launch)
const PRICE_ZIP = "price_1URPZNHkxiL4jmc8HXu4CEaE";   // $2.10 per extra ZIP, one-time
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
  const user = createClient(URL_, ANON, { global: { headers: { Authorization: req.headers.get("authorization") ?? "" } }, auth: { persistSession: false } });
  const { data: who } = await user.rpc("whoami");
  const me = Array.isArray(who) ? who[0]?.member_id : null;
  if (!me) return json({ error: "Sign in first." }, 401);

  const order = body.action === "zips" ? body.order : null;
  if (body.action !== "build" && body.action !== "zips") return json({ error: "Unknown action" }, 400);
  const { data: c } = await admin.rpc("casino_checkout_info", { p_id: body.id, p_order: order });
  if (!c || c.host_id !== me) return json({ error: "That Casino checkout expired. Start again." }, 400);

  const items: Record<string, unknown> = {};
  let i = 0;
  if (!order) items[i++] = { price: PRICE_BUILD, quantity: 1 };
  if (c.extra > 0) items[i++] = { price: PRICE_ZIP, quantity: c.extra };
  const meta = order ? { sf_link: "casino_zips", casino_id: c.id, order_id: order } : { sf_link: "casino_build", casino_id: c.id };
  const cs = await stripe("POST", "checkout/sessions", {
    mode: "payment", line_items: items, customer_email: c.email, client_reference_id: c.id,
    metadata: meta, payment_intent_data: { metadata: meta, description: (order ? "Extra ZIPs · " : "Casino build · ") + c.name },
    success_url: SITE + "/?casino=" + (order ? "zips" : "built") + "#casinos", cancel_url: SITE + "/?casino=cancelled#casinos",
    custom_text: { submit: { message: order ? "Adds " + c.extra + " ZIP code(s) to " + c.name + ". One-time." : "Builds " + c.name + ". One-time. Your Casino opens after a quick name check under the Casino Host Agreement you signed." } },
  }, (order ? "casino-zips-" + order : "casino-build-" + c.id));
  if (cs.error) return json({ error: cs.error.message === "not_configured" ? "Casino checkout opens soon." : cs.error.message }, 400);
  return json({ url: cs.url });
});

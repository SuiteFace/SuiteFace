// SuiteFace prepaid year: adds a $21-a-year membership price and two live payment links
// (regular: $21 Buy-In + $21 a year from day 30; launch: $21 a year, Buy-In waived).
// Runs only with a short-lived setup token (hash in the database) and only with the live key in STRIPE_SECRET_KEY.
// The key never leaves the function. Safe to re-run: it finds what it already made instead of duplicating.
import { createClient } from "jsr:@supabase/supabase-js@2";

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b, null, 2), { status: s, headers: { "Content-Type": "application/json" } });
const SITE = "https://suiteface.com";

function form(o: Record<string, unknown>, p = "", out: string[] = []): string[] {
  for (const [k, v] of Object.entries(o)) {
    if (v === undefined || v === null) continue;
    const key = p ? `${p}[${k}]` : k;
    if (typeof v === "object") form(v as Record<string, unknown>, key, out);
    else out.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(v)));
  }
  return out;
}

Deno.serve(async (req) => {
  const { data: ok } = await db.rpc("check_setup_token", { p: req.headers.get("x-setup-token") ?? "" });
  if (!ok) return json({ error: "Not allowed" }, 403);
  const key = Deno.env.get("STRIPE_SECRET_KEY") ?? "";
  if (!/^(rk|sk)_live_/.test(key)) return json({ error: "STRIPE_SECRET_KEY is not a live key" }, 400);
  const H = { Authorization: "Bearer " + key, "Stripe-Version": "2025-08-27.basil", "Content-Type": "application/x-www-form-urlencoded" };
  async function get(path: string) { const r = await fetch("https://api.stripe.com/v1/" + path, { headers: H }); const j = await r.json(); if (j.error) throw new Error(path + ": " + j.error.message); return j; }
  async function post(path: string, body: Record<string, unknown>, idem: string) {
    const r = await fetch("https://api.stripe.com/v1/" + path, { method: "POST", body: form(body).join("&"), headers: { ...H, "Idempotency-Key": "sf-annual-v1-" + idem } });
    const j = await r.json(); if (j.error) throw new Error(idem + ": " + j.error.message); return j;
  }
  async function productFor(sfKey: string) {
    const r = await get("products/search?query=" + encodeURIComponent(`metadata['sf_key']:'${sfKey}' AND active:'true'`));
    if (!r.data?.length) throw new Error("No live product with sf_key " + sfKey);
    return r.data[0];
  }
  try {
    const membership = await productFor("membership");
    const buyin = await productFor("buyin");
    // Yearly price on the existing membership product (reuse one if it already exists).
    const prices = await get("prices?product=" + membership.id + "&active=true&limit=100");
    let yearly = prices.data.find((p: { recurring?: { interval: string }; unit_amount: number }) => p.recurring?.interval === "year" && p.unit_amount === 2100);
    if (!yearly) yearly = await post("prices", { product: membership.id, currency: "usd", unit_amount: 2100, recurring: { interval: "year" }, nickname: "Prepaid year", metadata: { sf_key: "membership_annual" } }, "price-year");
    const { data: have } = await db.from("stripe_links").select("sf_key,url").in("sf_key", ["membership_annual", "membership_annual_launch"]);
    const out: Record<string, string> = {};
    for (const h of have ?? []) out[h.sf_key] = h.url;
    async function link(id: string, items: string[], redirect: string, extra: Record<string, unknown>) {
      if (out[id]) return;
      const line_items: Record<string, unknown> = {};
      items.forEach((p, i) => { line_items[i] = { price: p, quantity: 1 }; });
      const l = await post("payment_links", { line_items, metadata: { sf_link: id }, allow_promotion_codes: true, after_completion: { type: "redirect", redirect: { url: redirect } }, ...extra }, "link-" + id);
      await db.from("stripe_links").upsert({ payment_link_id: l.id, sf_key: id, url: l.url, livemode: true });
      out[id] = l.url;
    }
    await link("membership_annual", [buyin.default_price, yearly.id], SITE + "/?buyin=success", {
      subscription_data: { trial_period_days: 30, metadata: { sf_plan: "buyin_plus_yearly", sf_link: "membership_annual" } },
      custom_text: { submit: { message: "$21 Buy-In today. Then $21 a year starting in 30 days. Cancel anytime; a prepaid year isn't refunded for unused months." } } });
    await link("membership_annual_launch", [yearly.id], SITE + "/?joined=1#face", {
      subscription_data: { description: "SuiteFace Membership · prepaid year · launch offer (Buy-In waived)", metadata: { sf_link: "membership_annual_launch" } },
      custom_text: { submit: { message: "Launch offer: the $21 Buy-In is waived. You pay $21 today for a full year, then $21 each year until you cancel." } } });
    return json({ ok: true, links: out });
  } catch (e) {
    return json({ error: String((e as Error).message ?? e) }, 500);
  }
});

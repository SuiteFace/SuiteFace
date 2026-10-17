// SuiteFace one-time live setup: creates every live product, price and payment link with the live key in
// STRIPE_SECRET_KEY. Runs only with a short-lived setup token (hash in the database) and only with a live key.
// Safe to re-run: idempotency keys mean Stripe returns the same objects instead of duplicates.
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
  if (!/^(rk|sk)_live_/.test(key)) return json({ error: "STRIPE_SECRET_KEY is not a live key yet" }, 400);

  async function s(path: string, body: Record<string, unknown>, idem: string) {
    const r = await fetch("https://api.stripe.com/v1/" + path, {
      method: "POST", body: form(body).join("&"),
      headers: { Authorization: "Bearer " + key, "Stripe-Version": "2025-08-27.basil", "Content-Type": "application/x-www-form-urlencoded", "Idempotency-Key": "sf-live-v1-" + idem },
    });
    const j = await r.json();
    if (j.error) throw new Error(idem + ": " + j.error.message);
    return j;
  }
  async function product(id: string, name: string, desc: string, price: Record<string, unknown>) {
    const p = await s("products", { name, description: desc, metadata: { sf_key: id }, default_price_data: { currency: "usd", ...price } }, "prod-" + id);
    return { product: p.id, price: p.default_price as string };
  }
  async function extraPrice(prod: string, id: string, price: Record<string, unknown>) {
    const p = await s("prices", { product: prod, currency: "usd", ...price, metadata: { sf_key: id } }, "price-" + id);
    return p.id as string;
  }
  async function link(id: string, items: { price: string; quantity?: number; adjustable?: boolean }[], redirect: string, extra: Record<string, unknown> = {}) {
    const line_items: Record<string, unknown> = {};
    items.forEach((it, i) => { line_items[i] = { price: it.price, quantity: it.quantity ?? 1, ...(it.adjustable ? { adjustable_quantity: { enabled: true, minimum: 1, maximum: 50 } } : {}) }; });
    const l = await s("payment_links", { line_items, metadata: { sf_link: id.replace(/2$/, "") }, allow_promotion_codes: true, after_completion: { type: "redirect", redirect: { url: redirect } }, ...extra }, "link-" + id);
    return { id: l.id, url: l.url };
  }

  try {
    const out: Record<string, unknown> = {};
    // Membership
    const buyin = await product("buyin", "SuiteFace Buy-In", "One-time membership Buy-In. Includes your first 30 days.", { unit_amount: 2100 });
    const monthly = await product("membership", "SuiteFace Membership", "$2.10 a month. Cancel anytime.", { unit_amount: 210, recurring: { interval: "month" } });
    out.membership = await link("membership", [{ price: buyin.price }, { price: monthly.price }], SITE + "/?buyin=success", {
      subscription_data: { trial_period_days: 30, metadata: { sf_plan: "buyin_plus_monthly" } },
      custom_text: { submit: { message: "$21 Buy-In today. Then $2.10 a month starting in 30 days. Cancel anytime. A pause longer than 21 days requires a new $21 Buy-In." } } });
    out.membership_launch = await link("membership_launch", [{ price: monthly.price }], SITE + "/?joined=1#face", {
      subscription_data: { description: "SuiteFace Membership · launch offer (Buy-In waived)", metadata: { sf_link: "membership_launch" } },
      custom_text: { submit: { message: "Launch offer: the $21 Buy-In is waived. You pay $2.10 today and $2.10 every month until you cancel." } } });
    // Jokers
    const lobby = await product("joker_lobby_entry", "Joker Maker Lobby Entry", "One entry to the Joker Maker Lobby. Non-refundable.", { unit_amount: 21000 });
    out.joker_lobby_entry = await link("joker_lobby_entry", [{ price: lobby.price }], SITE + "/joker-lobby.html?paid=1");
    const removal = await product("paid_joker_removal", "Lobby Joker Removal", "Removes a lobby Joker and protects 45 days. Non-refundable.", { unit_amount: 21000 });
    out.paid_joker_removal = await link("paid_joker_removal", [{ price: removal.price }], SITE + "/joker-lobby.html?cleared=1");
    const buyout = await product("vote_joker_buyout", "Public Joker Buy-Out", "Clears a public JOKER after probation. Non-refundable.", { unit_amount: 210000 });
    out.vote_joker_buyout = await link("vote_joker_buyout", [{ price: buyout.price }], SITE + "/?joker=cleared");
    // The Raise
    const raise = await product("dealer_raise", "The Raise", "AI date prep from the Dealer. One Raise per unit.", { unit_amount: 210 });
    out.dealer_raise = await link("dealer_raise", [{ price: raise.price, adjustable: true }], SITE + "/?raise=paid");
    // House Partners
    const pBuy = await product("partner_buyin", "House Partner Buy-In", "12-month House Partner Buy-In.", { unit_amount: 21000 });
    const pMonth = await product("partner_listing", "House Partner Listing", "$21 a month listing.", { unit_amount: 2100, recurring: { interval: "month" } });
    const comp = await product("comp_redemption", "Comp Redemption", "$2.10 per accepted comp.", { unit_amount: 210 });
    out.partner_listing = await link("partner_listing", [{ price: pBuy.price }, { price: pMonth.price }], SITE + "/?partner=joined");
    // ZIP Sponsors
    const zip = await product("zip_sponsor", "ZIP Sponsor Package", "7 ZIP codes, billed every 30 days.", { unit_amount: 21000, recurring: { interval: "day", interval_count: 30 } });
    out.zip_sponsor = await link("zip_sponsor", [{ price: zip.price }], SITE + "/?sponsor=paid");
    // High Roller
    const hrBuy = await product("high_roller_buyin", "High Roller Buy-In", "One-time High Roller Room Buy-In. Non-refundable.", { unit_amount: 500000 });
    out.high_roller_buyin = await link("high_roller_buyin", [{ price: hrBuy.price }], SITE + "/?highroller=paid");
    const hrYear = await product("hr_sponsor", "High Roller Sponsor", "Annual High Roller Sponsor access.", { unit_amount: 210000, recurring: { interval: "year" } });
    const hrWeek = await extraPrice(hrYear.product, "hr_sponsor_weekly", { unit_amount: 21000, recurring: { interval: "week" } });
    const hrRedeem = await product("hr_redemption", "High Roller Redemption", "$21 per accepted High Roller offer.", { unit_amount: 2100 });
    const hrAnnualOnce = await extraPrice(hrYear.product, "hr_sponsor_annual_once", { unit_amount: 210000 }); // one checkout can't mix yearly + weekly
    out.hr_sponsor = await link("hr_sponsor2", [{ price: hrAnnualOnce }, { price: hrWeek }], SITE + "/?hrsponsor=joined");
    // Casinos (checkout made per Casino by casino-billing)
    const cBuild = await product("casino_build", "SuiteFace Casino Build", "Build and name your own SuiteFace Casino. Includes up to 7 ZIP codes. One-time.", { unit_amount: 2100 });
    const cZip = await product("casino_zip", "SuiteFace Casino Extra ZIP", "Adds one more ZIP code to your SuiteFace Casino. One-time, per ZIP.", { unit_amount: 210 });
    const cState = await product("casino_state", "SuiteFace Casino Statewide", "Covers one whole state for your SuiteFace Casino. One-time, per state.", { unit_amount: 21000 });
    const cNation = await product("casino_national", "SuiteFace Casino Nationwide", "Covers the whole United States for your SuiteFace Casino. One-time.", { unit_amount: 210000 });
    out.casino_coverage = { state: cState.price, national: cNation.price };
    out.prices = { buyin: buyin.price, monthly: monthly.price, zip_sponsor_30d: zip.price, casino_build: cBuild.price, casino_zip: cZip.price, comp_redemption: comp.price, hr_redemption: hrRedeem.price, partner_monthly: pMonth.price, hr_weekly: hrWeek, hr_annual_once: hrAnnualOnce };
    return json({ ok: true, live: out });
  } catch (e) {
    return json({ error: String((e as Error).message) }, 400);
  }
});

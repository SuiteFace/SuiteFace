// SuiteFace chips and the yearly seat (Oct 19 model).
// Creates, once: a "SuiteFace Chips" product with three one-time prices ($2.10, $21, $210) and a payment link for each,
// plus a payment link for the $21 Buy-In that holds a seat and username for 365 days (uses the existing Buy-In price).
// Runs only with a short-lived setup token (hash in the database) and only with the live key in STRIPE_SECRET_KEY.
// The key never leaves the function. Safe to re-run: it reuses what it already made.
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
    const r = await fetch("https://api.stripe.com/v1/" + path, { method: "POST", body: form(body).join("&"), headers: { ...H, "Idempotency-Key": "sf-chips-v1-" + idem } });
    const j = await r.json(); if (j.error) throw new Error(idem + ": " + j.error.message); return j;
  }
  async function productFor(sfKey: string) {
    const r = await get("products/search?query=" + encodeURIComponent(`metadata['sf_key']:'${sfKey}' AND active:'true'`));
    return r.data?.[0] ?? null;
  }
  try {
    let chips = await productFor("chips");
    if (!chips) chips = await post("products", { name: "SuiteFace Chips", description: "Chips for SuiteFace: play a deck, themes and sticker packs. No cash value. Non-refundable except where the law requires.", metadata: { sf_key: "chips" } }, "product-chips");
    const buyin = await productFor("buyin");
    if (!buyin) throw new Error("No live product with sf_key buyin");
    const prices = await get("prices?product=" + chips.id + "&active=true&limit=100");
    async function price(cents: number) {
      const have = prices.data.find((p: { unit_amount: number; recurring?: unknown }) => p.unit_amount === cents && !p.recurring);
      return have ?? await post("prices", { product: chips.id, currency: "usd", unit_amount: cents, nickname: "Chips $" + (cents / 100).toFixed(2), metadata: { sf_key: "chips_" + cents } }, "price-" + cents);
    }
    const { data: have } = await db.from("stripe_links").select("sf_key,url").in("sf_key", ["chips_210", "chips_2100", "chips_21000", "seat_year"]);
    const out: Record<string, string> = {};
    for (const h of have ?? []) out[h.sf_key] = h.url;
    async function link(id: string, priceId: string, redirect: string, message: string) {
      if (out[id]) return;
      const l = await post("payment_links", {
        line_items: { 0: { price: priceId, quantity: 1 } }, metadata: { sf_link: id },
        after_completion: { type: "redirect", redirect: { url: redirect } }, custom_text: { submit: { message } },
      }, "link-" + id);
      await db.from("stripe_links").upsert({ payment_link_id: l.id, sf_key: id, url: l.url, livemode: true });
      out[id] = l.url;
    }
    const note = "Chips have no cash value, never expire and are non-refundable except where the law requires.";
    await link("chips_210", (await price(210)).id, SITE + "/chips.html?bought=1", "$2.10 in chips: one deck. " + note);
    await link("chips_2100", (await price(2100)).id, SITE + "/chips.html?bought=1", "$21 in chips: ten decks. " + note);
    await link("chips_21000", (await price(21000)).id, SITE + "/chips.html?bought=1", "$210 in chips: a hundred decks. " + note);
    await link("seat_year", buyin.default_price, SITE + "/membership.html?seat=1", "$21 Buy-In: your seat and username for 365 days. It doesn't renew on its own; we'll remind you before it ends.");
    return json({ ok: true, links: out });
  } catch (e) {
    return json({ error: String((e as Error).message ?? e) }, 500);
  }
});

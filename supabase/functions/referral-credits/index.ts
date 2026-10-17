// SuiteFace referral credits: each referred member who is seated credits the referrer $2.10, up to 12 credits.
// The credit goes on the referrer's Stripe customer balance, so it comes off their next $2.10 monthly charge.
// Safe to call any time: it only acts on credits marked pending in the database. Secret needed: STRIPE_SECRET_KEY.
import { createClient } from "jsr:@supabase/supabase-js@2";

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { "Content-Type": "application/json" } });

Deno.serve(async () => {
  const key = Deno.env.get("STRIPE_SECRET_KEY");
  if (!key) return json({ error: "not_configured" }, 503);
  const { data: rows } = await db.rpc("referral_credits_due");
  const out: unknown[] = [];
  for (const r of rows ?? []) {
    if (!r.customer) { await db.rpc("referral_credit_result", { p_id: r.id, p_status: "no_customer", p_txn: null, p_note: "Referrer has no Stripe customer yet" }); out.push({ id: r.id, wait: true }); continue; }
    const body = new URLSearchParams({ amount: String(-Math.abs(r.amount_cents)), currency: "usd", description: "SuiteFace referral credit: @" + (r.referred_handle ?? "member") + " joined" });
    const res = await fetch("https://api.stripe.com/v1/customers/" + r.customer + "/balance_transactions", {
      method: "POST", body,
      headers: { Authorization: "Bearer " + key, "Stripe-Version": "2025-08-27.basil", "Content-Type": "application/x-www-form-urlencoded", "Idempotency-Key": "sf-ref-" + r.id },
    });
    const j = await res.json();
    if (j.error) { await db.rpc("referral_credit_result", { p_id: r.id, p_status: "failed", p_txn: null, p_note: j.error.message }); out.push({ id: r.id, error: j.error.message }); continue; }
    await db.rpc("referral_credit_result", { p_id: r.id, p_status: "applied", p_txn: j.id, p_note: null });
    out.push({ id: r.id, ok: true });
  }
  return json({ credits: out });
});

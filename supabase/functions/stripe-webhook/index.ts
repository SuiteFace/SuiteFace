// SuiteFace: Stripe webhook -> seats at the table.
// Verifies Stripe's signature (STRIPE_WEBHOOK_SECRET), then hands the event to public.apply_stripe_event.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.45.4";

const enc = new TextEncoder();

async function hmacHex(secret: string, payload: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(payload));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

async function verify(raw: string, header: string | null, secret: string): Promise<boolean> {
  if (!header) return false;
  const parts = header.split(",").map((p) => p.trim().split("="));
  const t = parts.find((p) => p[0] === "t")?.[1];
  const sigs = parts.filter((p) => p[0] === "v1").map((p) => p[1]);
  if (!t || sigs.length === 0) return false;
  if (Math.abs(Date.now() / 1000 - Number(t)) > 300) return false; // 5-minute tolerance
  const expected = await hmacHex(secret, `${t}.${raw}`);
  return sigs.some((s) => safeEqual(s, expected));
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  const secret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  if (!secret) return new Response("Webhook secret not configured", { status: 500 });

  const raw = await req.text();
  if (!(await verify(raw, req.headers.get("stripe-signature"), secret))) {
    return new Response("Bad signature", { status: 400 });
  }

  let event: unknown;
  try { event = JSON.parse(raw); } catch { return new Response("Bad JSON", { status: 400 }); }

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false },
  });
  const { data, error } = await supabase.rpc("apply_stripe_event", { event });
  if (error) {
    console.error("apply_stripe_event failed", error.message);
    return new Response("Could not apply event", { status: 500 }); // Stripe retries
  }
  return new Response(JSON.stringify({ received: true, outcome: data }), {
    headers: { "Content-Type": "application/json" },
  });
});

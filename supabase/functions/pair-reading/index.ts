// SuiteFace "Read us": your card + their card, read together by the AI dealer.
// Uses only your own answers and what they show Face Up. Zodiac only when both of you follow it.
// Cached for 14 days per pair; up to 12 new readings a day per member.
// Secrets: ANTHROPIC_API_KEY (shared with ask-dealer and bluff-chat).
import { createClient } from "jsr:@supabase/supabase-js@2";

const API = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-sonnet-5-5";
const URL_ = Deno.env.get("SUPABASE_URL")!, ANON = Deno.env.get("SUPABASE_ANON_KEY")!;
const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info", "Access-Control-Allow-Methods": "POST, OPTIONS" };
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { ...CORS, "Content-Type": "application/json" } });
const admin = createClient(URL_, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });

const SYSTEM = `You are the dealer at SuiteFace, a card-themed dating site. Write a short, warm, honest "reading" of two people's cards read together.
Suits: Heart = steady, warm, loyal listener; shows love by being there. Diamond = direct, decisive planner; shows love by making things happen. Club = outgoing, playful, big energy; shows love with fun. Spade = thoughtful, careful, quietly all-in; shows love through follow-through and detail.
Rules:
- Use only the facts given. Never invent facts about either person. Speak to the first person ("you") about the second by first name.
- Be encouraging but honest: real strengths and real challenges, never insulting, never certain. No predictions about sex, money or marriage outcomes.
- If zodiac signs are given for both, include a light, playful zodiac note; otherwise leave zodiac out entirely.
- No protected-trait judgments (race, religion, orientation, disability, politics) beyond noting shared values they both list.
Return ONLY JSON: {"title": string (max 8 words), "story": string (2-3 sentences, a little poetic), "strengths": [3 short strings], "challenges": [2 short strings], "zodiac": string or null, "first_date": string (one specific idea from their shared interests)}`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  const body = await req.json().catch(() => ({}));
  const other = String(body.other ?? "");
  if (!/^[0-9a-f-]{36}$/.test(other)) return json({ error: "Missing card." }, 400);
  const user = createClient(URL_, ANON, { global: { headers: { Authorization: req.headers.get("authorization") ?? "" } }, auth: { persistSession: false } });
  const { data: who } = await user.rpc("whoami");
  const me = Array.isArray(who) ? who[0]?.member_id : null;
  if (!me || !who[0]?.seated) return json({ error: "Members only." }, 401);
  const { data: ctx, error } = await admin.rpc("pair_reading_context_svc", { p_member: me, p_other: other });
  if (error || !ctx) return json({ error: "Couldn't read these cards." }, 400);
  if (ctx.error) return json({ error: ctx.error }, 400);
  if (ctx.cached) return json({ reading: ctx.cached, cached: true });
  const key = Deno.env.get("ANTHROPIC_API_KEY");
  if (!key) return json({ error: "Readings are resting. Try again soon." }, 503);
  const r = await fetch(API, {
    method: "POST",
    headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model: MODEL, max_tokens: 700, system: SYSTEM, messages: [{ role: "user", content: "Cards (JSON):\n" + JSON.stringify({ me: ctx.me, them: ctx.them }) }] }),
  });
  const j = await r.json().catch(() => ({}));
  const text = (j.content ?? []).filter((x: { type: string }) => x.type === "text").map((x: { text: string }) => x.text).join("").trim();
  let reading: Record<string, unknown> | null = null;
  try { reading = JSON.parse(text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1)); } catch { reading = null; }
  if (!r.ok || !reading || typeof reading.story !== "string") return json({ error: "The dealer fumbled the cards. Try again." }, 502);
  if (!ctx.me?.zodiac || !ctx.them?.zodiac) reading.zodiac = null;
  await admin.rpc("pair_reading_save_svc", { p_member: me, p_other: other, p_reading: reading });
  return json({ reading });
});

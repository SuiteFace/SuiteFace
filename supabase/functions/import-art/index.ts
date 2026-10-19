// SuiteFace art import: copies a generated image (Gamma or Figma CDN only) into the public 'site-art' bucket
// and returns its public URL plus a small preview. Runs only with a short-lived setup token (hash in the database),
// started by private.art_token_start() and expired by private.art_token_end().
import { createClient } from "jsr:@supabase/supabase-js@2";
import { Image } from "https://deno.land/x/imagescript@1.3.0/mod.ts";

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { "Content-Type": "application/json" } });
const ALLOW = [/^cdn\.gamma\.app$/, /(^|\.)figma\.com$/, /^figma-alpha-api\.s3\.[a-z0-9-]+\.amazonaws\.com$/];

function b64(u: Uint8Array) { let s = ""; for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode(...u.subarray(i, i + 0x8000)); return btoa(s); }

Deno.serve(async (req) => {
  const { data: ok } = await db.rpc("check_setup_token", { p: req.headers.get("x-setup-token") ?? "" });
  if (!ok) return json({ error: "Not allowed" }, 403);
  try {
    const { url, path, width, preview } = await req.json();
    const u = new URL(url);
    if (u.protocol !== "https:" || !ALLOW.some((r) => r.test(u.hostname))) return json({ error: "Host not allowed" }, 400);
    if (!/^[a-z0-9][a-z0-9/_.-]{2,120}\.(png|jpg)$/.test(path ?? "")) return json({ error: "Bad path" }, 400);
    const r = await fetch(url); if (!r.ok) return json({ error: "Fetch " + r.status }, 502);
    const raw = new Uint8Array(await r.arrayBuffer());
    let img = await Image.decode(raw) as Image;
    const W = Math.min(Number(width) || 900, img.width);
    if (img.width > W) img = img.resize(W, Image.RESIZE_AUTO);
    const isPng = path.endsWith(".png");
    const out = isPng ? await img.encode() : await img.encodeJPEG(86);
    await db.storage.createBucket("site-art", { public: true }).catch(() => {});
    const up = await db.storage.from("site-art").upload(path, out, { contentType: isPng ? "image/png" : "image/jpeg", upsert: true, cacheControl: "31536000" });
    if (up.error) return json({ error: up.error.message }, 500);
    const pub = db.storage.from("site-art").getPublicUrl(path).data.publicUrl;
    let thumb: string | null = null;
    if (preview) { const t = img.clone().resize(Math.min(260, img.width), Image.RESIZE_AUTO); thumb = b64(await t.encodeJPEG(70)); }
    return json({ ok: true, url: pub, width: img.width, height: img.height, bytes: out.length, preview: thumb });
  } catch (e) {
    return json({ error: String((e as Error).message ?? e) }, 500);
  }
});

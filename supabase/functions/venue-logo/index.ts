// SuiteFace House Partner logo upload. A venue (venue code + PIN) or staff (signed in) uploads a logo;
// SuiteFace renders it as an enamel pin, embroidered patch or gold coin on members' cards.
// Venue uploads wait for staff approval; staff uploads are approved right away. PNG, JPEG or WebP, up to 2 MB. No SVG.
import { createClient } from "jsr:@supabase/supabase-js@2";

const URL_ = Deno.env.get("SUPABASE_URL")!, ANON = Deno.env.get("SUPABASE_ANON_KEY")!;
const admin = createClient(URL_, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info", "Access-Control-Allow-Methods": "POST, OPTIONS" };
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { ...CORS, "Content-Type": "application/json" } });
const TYPES: Record<string, string> = { "image/png": "png", "image/jpeg": "jpg", "image/webp": "webp" };

function sniff(b: Uint8Array): string | null {
  if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return "image/png";
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return "image/jpeg";
  if (b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 && b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50) return "image/webp";
  return null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "POST only" }, 405);
  const form = await req.formData().catch(() => null);
  if (!form) return json({ error: "Send the logo as a file upload." }, 400);
  const style = String(form.get("style") ?? "pin");
  const rights = String(form.get("rights") ?? "") === "yes";
  const file = form.get("logo");
  let partner: string | null = null, staff = false;

  const slug = String(form.get("slug") ?? ""), pin = String(form.get("pin") ?? "");
  if (slug && pin) {
    const { data, error } = await admin.rpc("venue_id_svc", { p_slug: slug, p_pin: pin });
    if (error || !data) return json({ error: error?.message ?? "Check your venue code and PIN." }, 401);
    partner = data as string;
  } else {
    const user = createClient(URL_, ANON, { global: { headers: { Authorization: req.headers.get("authorization") ?? "" } }, auth: { persistSession: false } });
    const { data: who } = await user.rpc("whoami");
    const me = Array.isArray(who) ? who[0] : null;
    if (!me || !["dealer", "pitboss", "owner"].includes(me.role)) return json({ error: "Venue code and PIN needed." }, 401);
    staff = true; partner = String(form.get("partner") ?? "");
    if (!/^[0-9a-f-]{36}$/.test(partner)) return json({ error: "Pick a venue." }, 400);
  }
  if (!(file instanceof File)) { // style change only
    await admin.rpc("partner_logo_set_svc", { p_partner: partner, p_path: null, p_style: style, p_by_staff: staff });
    return json({ ok: true });
  }
  if (!rights) return json({ error: "Please confirm you own the logo or are allowed to use it." }, 400);
  if (file.size > 2 * 1024 * 1024) return json({ error: "Logo must be 2 MB or smaller." }, 400);
  const bytes = new Uint8Array(await file.arrayBuffer());
  const type = sniff(bytes);
  if (!type) return json({ error: "Use a PNG, JPEG or WebP image." }, 400);
  const path = partner + "/" + Date.now() + "." + TYPES[type];
  const up = await admin.storage.from("venue-logos").upload(path, bytes, { contentType: type, upsert: false });
  if (up.error) return json({ error: up.error.message }, 500);
  const { error } = await admin.rpc("partner_logo_set_svc", { p_partner: partner, p_path: path, p_style: style, p_by_staff: staff });
  if (error) return json({ error: error.message }, 500);
  return json({ ok: true, path, review: staff ? "approved" : "pending" });
});

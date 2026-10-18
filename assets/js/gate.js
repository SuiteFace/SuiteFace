/* SuiteFace age gate: 18+ confirmation and agreement to the Terms.
   Visitors see the public pages (the game, the suits, a sample hand) first. The gate opens when they
   take a step to join: "Get dealt in", Log in, any agreement to sign, or a members-area page.
   Legal pages stay open so the links inside the gate work. The choice is remembered on this device;
   members still sign the full Sign-up Agreement (with date of birth) when they create an account. */
(function () {
  var VERSION = "2026-10-16";
  var KEY = "sf.gate";
  var path = location.pathname.replace(/^\/+/, "");
  var OPEN = /^(terms|privacy|safety|state-notices|joker-rules|fit|legal|under-18)\.html$|^agreements\//;
  var MEMBERS = /^(my-table|joker-lobby|private-table|bluff-table|card-backs|casino)\.html$/;
  function passed() { try { return localStorage.getItem(KEY) === VERSION; } catch (e) { return false; } }
  var waiting = [];
  window.SFGate = { ok: passed, require: function (cb) { if (passed()) { cb && cb(); return; } if (cb) waiting.push(cb); if (!document.querySelector(".sfg")) show(); } };
  if (OPEN.test(path) || passed()) return;
  var up = /^agreements\//.test(path) ? "../" : "";

  var css = '\
.sfg{position:fixed;inset:0;z-index:10050;display:grid;place-items:center;padding:16px;background:rgba(23,21,27,.86);backdrop-filter:blur(8px)}\
.sfg-box{width:min(480px,100%);max-height:calc(100vh - 32px);overflow:auto;background:#2B2730;color:#CFC6B6;border:1px solid #B8862F;border-radius:22px;padding:26px 24px 22px;box-shadow:0 30px 80px rgba(0,0,0,.6);font:16px/1.55 Figtree,"Segoe UI",system-ui,sans-serif}\
.sfg-box h2{margin:6px 0 6px;color:#FAF7F0;font:900 2rem/1.05 "Big Shoulders Display","Arial Narrow",Impact,sans-serif;text-transform:uppercase;letter-spacing:.02em}\
.sfg-badge{display:inline-grid;place-items:center;width:58px;height:58px;border-radius:50%;background:radial-gradient(circle,#FFE7A3,#B8862F);color:#231C10;font:900 1.35rem "Big Shoulders Display",Impact,sans-serif;box-shadow:0 0 0 3px #FAF7F0,0 0 0 5px #B8862F}\
.sfg-box p{margin:8px 0}\
.sfg-box a{color:#E8C46A}\
.sfg-check{display:flex;gap:10px;align-items:flex-start;margin:12px 0;cursor:pointer;color:#FAF7F0}\
.sfg-check input{width:20px;height:20px;margin-top:2px;accent-color:#B8862F;flex:none}\
.sfg-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}\
.sfg-go{all:unset;cursor:pointer;flex:1;min-width:150px;text-align:center;padding:.8rem 1.2rem;border-radius:999px;font-weight:700;background:linear-gradient(180deg,#E8C46A,#B8862F);color:#231C10}\
.sfg-go[aria-disabled="true"]{opacity:.45;cursor:not-allowed}\
.sfg-no{all:unset;cursor:pointer;padding:.8rem 1.2rem;border-radius:999px;border:1px solid rgba(250,247,240,.25);color:#FAF7F0;font-weight:600}\
.sfg-go:focus-visible,.sfg-no:focus-visible{outline:3px solid #FFE7A3;outline-offset:3px}\
.sfg-fine{font-size:.82rem;color:#A69DB0;margin-top:14px}\
.sfg-err{color:#E5505E;font-weight:600;min-height:1.2em;font-size:.9rem}';
  var s = document.createElement("style"); s.textContent = css; document.head.appendChild(s);

  function show() {
    var g = document.createElement("div"); g.className = "sfg"; g.setAttribute("role", "dialog"); g.setAttribute("aria-modal", "true"); g.setAttribute("aria-labelledby", "sfgT");
    g.innerHTML = '<div class="sfg-box"><span class="sfg-badge" aria-hidden="true">18+</span>' +
      '<h2 id="sfgT">Welcome to SuiteFace<sup style="font-size:.4em;vertical-align:super;margin-left:2px">™</sup></h2>' +
      '<p>SuiteFace is a dating site for <b>adults 18 and older</b>. Meeting people carries real risk: always meet in public, and call 911 in an emergency.</p>' +
      '<label class="sfg-check"><input type="checkbox" id="sfgAge"> <span>I confirm I am <b>18 years of age or older</b>.</span></label>' +
      '<label class="sfg-check"><input type="checkbox" id="sfgTerms"> <span>I agree to the <a href="' + up + 'terms.html" target="_blank" rel="noopener">Terms of Service</a> and have read the <a href="' + up + 'privacy.html" target="_blank" rel="noopener">Privacy Policy</a>, <a href="' + up + 'safety.html" target="_blank" rel="noopener">Safety Guide</a> and <a href="' + up + 'state-notices.html" target="_blank" rel="noopener">State Notices</a>.</span></label>' +
      '<div class="sfg-err" id="sfgErr" role="alert"></div>' +
      '<div class="sfg-row"><button class="sfg-go" type="button" id="sfgGo" aria-disabled="true">Enter SuiteFace</button><button class="sfg-no" type="button" id="sfgNo">I\'m under 18</button></div>' +
      '<p class="sfg-fine">© 2026 SuiteFace Inc., a Florida corporation. You\'ll confirm your full date of birth and sign the Sign-up Agreement when you create an account. Questions: <a href="mailto:help@suiteface.com">help@suiteface.com</a> · <a href="' + up + 'legal.html" target="_blank" rel="noopener">Legal center</a></p></div>';
    document.body.appendChild(g);
    document.documentElement.style.overflow = "hidden";
    var age = g.querySelector("#sfgAge"), terms = g.querySelector("#sfgTerms"), go = g.querySelector("#sfgGo"), err = g.querySelector("#sfgErr");
    function sync() { var ok = age.checked && terms.checked; go.setAttribute("aria-disabled", String(!ok)); if (ok) err.textContent = ""; }
    age.addEventListener("change", sync); terms.addEventListener("change", sync);
    go.addEventListener("click", function () {
      if (!age.checked || !terms.checked) { err.textContent = !age.checked ? "Please confirm you are 18 or older." : "Please agree to the Terms of Service to continue."; return; }
      try { localStorage.setItem(KEY, VERSION); localStorage.setItem(KEY + ".at", new Date().toISOString()); } catch (e) { }
      document.documentElement.style.overflow = ""; g.remove();
      var q = waiting.splice(0); q.forEach(function (f) { try { f(); } catch (e) { } });
    });
    g.querySelector("#sfgNo").addEventListener("click", function () { location.href = up + "under-18.html"; });
    // keep keyboard focus inside the gate
    g.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return; var f = g.querySelectorAll("input,button,a"); var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    setTimeout(function () { age.focus(); }, 50);
  }
  function start() {
    if (MEMBERS.test(path)) { show(); return; }
    // Steps that mean "I want to join" go through the gate first, then carry on.
    document.addEventListener("click", function (e) {
      if (passed()) return;
      var el = e.target.closest && e.target.closest("[data-gate], #loginBtn, #payBtn, .promo-cta");
      if (!el) return;
      e.preventDefault(); e.stopImmediatePropagation();
      window.SFGate.require(function () { if (el.tagName === "A" && el.href && !/#/.test(el.getAttribute("href") || "")) location.href = el.href; else el.click(); });
    }, true);
    // Signing any SuiteFace agreement also needs the 18+ confirmation first.
    var hook = function () { var S = window.SFSign; if (!S || S.__gated) return; var r = S.require; S.require = function () { var a = arguments, me = this; window.SFGate.require(function () { r.apply(me, a); }); }; S.__gated = true; };
    hook(); setTimeout(hook, 0);
  }
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();

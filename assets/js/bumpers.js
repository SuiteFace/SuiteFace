/* SuiteFace Bumper Stickers: what you'd proudly put on your car, on your card instead.
   Up to 3 per member. Saved to the account (members.bumpers) and shown on your card in other people's Hands.
   A sticker is self-declared until the house checks it; a checked sticker wears a brass ✓.
   Use: SFBumpers.html("veteran", { verified: true })  or  SFBumpers.strip(["veteran","pilot"], ["veteran"]). */
(function () {
  var I = {
    star: '<path d="M12 3.2l2.6 5.5 6 .7-4.5 4.1 1.2 5.9L12 16.5l-5.3 2.9 1.2-5.9-4.5-4.1 6-.7z" fill="currentColor"/>',
    ribbon: '<path d="M8 2h8l-2 6h-4z" fill="currentColor" opacity=".7"/><path d="M12 9.2l1.7 3.5 3.8.5-2.8 2.6.7 3.8-3.4-1.9-3.4 1.9.7-3.8-2.8-2.6 3.8-.5z" fill="currentColor"/>',
    cap: '<path d="M12 4L1.8 9 12 14l10.2-5z" fill="currentColor"/><path d="M6 11.3v4.2c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M21 9.4v5.4" stroke="currentColor" stroke-width="1.6"/>',
    cross: '<rect x="9.4" y="3" width="5.2" height="18" rx="1" fill="currentColor"/><rect x="3" y="9.4" width="18" height="5.2" rx="1" fill="currentColor"/>',
    heart: '<path d="M12 20.5S3 15 3 9a4.6 4.6 0 0 1 9-1.4A4.6 4.6 0 0 1 21 9c0 6-9 11.5-9 11.5z" fill="currentColor"/><path d="M12 8.5v6M9 11.5h6" stroke="#fff" stroke-width="1.9"/>',
    apple: '<path d="M12 7.5c-1.5-1.2-5.6-1.6-6.8 2.2-1.1 3.6 1.5 9.8 4.2 9.8 1.3 0 1.6-.7 2.6-.7s1.3.7 2.6.7c2.7 0 5.3-6.2 4.2-9.8-1.2-3.8-5.3-3.4-6.8-2.2z" fill="currentColor"/><path d="M12 7.3c0-2.3 1.2-3.6 3-4.1" fill="none" stroke="currentColor" stroke-width="1.7"/>',
    whistle: '<circle cx="9" cy="14" r="5.5" fill="currentColor"/><path d="M11 8.6h9.5v4.2H13" fill="currentColor"/><circle cx="9" cy="14" r="1.8" fill="#fff" opacity=".85"/>',
    scales: '<path d="M12 3v16M6 21h12M5 6h14" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M5 6l-3 6h6zM19 6l-3 6h6z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M2 12a3 2 0 0 0 6 0zM16 12a3 2 0 0 0 6 0z" fill="currentColor"/>',
    ledger: '<rect x="4.5" y="2.5" width="15" height="19" rx="2" fill="currentColor"/><rect x="7" y="5" width="10" height="3.6" rx=".6" fill="#fff" opacity=".9"/><g fill="#fff" opacity=".9"><rect x="7" y="11" width="2.4" height="2.2"/><rect x="10.8" y="11" width="2.4" height="2.2"/><rect x="14.6" y="11" width="2.4" height="2.2"/><rect x="7" y="15" width="2.4" height="2.2"/><rect x="10.8" y="15" width="2.4" height="2.2"/><rect x="14.6" y="15" width="2.4" height="5.4"/></g>',
    shop: '<path d="M3 9l2-5h14l2 5z" fill="currentColor"/><path d="M4.5 9.5V20h15V9.5" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="9.5" y="13.5" width="5" height="6.5" fill="currentColor"/>',
    sunset: '<path d="M7 16a5 5 0 0 1 10 0z" fill="currentColor"/><path d="M2.5 18.5h19M12 5v3M4.6 9.2l2 1.6M19.4 9.2l-2 1.6" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
    wings: '<path d="M12 11.5c-3-1.6-7.2-2.2-10.5-1.8 1.4 2.3 5 4 10.5 4z M12 11.5c3-1.6 7.2-2.2 10.5-1.8-1.4 2.3-5 4-10.5 4z" fill="currentColor"/><circle cx="12" cy="11.8" r="2.6" fill="currentColor"/><path d="M5 15.5c2.2.8 4.4 1.2 7 1.2s4.8-.4 7-1.2" fill="none" stroke="currentColor" stroke-width="1.3"/>',
    wheel: '<circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="1.9" fill="currentColor"/><g stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></g>'
  };
  /* [key, label, small line, icon, body, ink] — house colors only; the flag keeps the flag's own colors */
  var LIST = [
    ["veteran", "Veteran", "Served", "ribbon", "#26232B", "#E3C77E", "Service"],
    ["active_duty", "Active Duty", "Serving now", "star", "#4B5B3A", "#F2ECDD", "Service"],
    ["flag", "", "", "", "", "", "Service"],
    ["college", "College Grad", "Bachelor's", "cap", "#8E2230", "#F2ECDD", "Education"],
    ["masters", "Master's", "Graduate degree", "cap", "#1E6347", "#F2ECDD", "Education"],
    ["phd", "Ph.D.", "Doctorate", "cap", "#26232B", "#E3C77E", "Education"],
    ["md", "M.D.", "Physician", "cross", "#F2ECDD", "#8E2230", "Work"],
    ["do", "D.O.", "Physician", "cross", "#F2ECDD", "#1E6347", "Work"],
    ["nurse", "Nurse", "Caregiver", "heart", "#B5475A", "#FFF8EE", "Work"],
    ["educator", "Teacher", "Educator", "apple", "#C9A55A", "#26232B", "Work"],
    ["coach", "Coach", "Team player", "whistle", "#1E6347", "#F2ECDD", "Work"],
    ["lawyer", "Lawyer", "Attorney", "scales", "#26232B", "#F2ECDD", "Work"],
    ["cpa", "CPA", "Accountant", "ledger", "#24483A", "#F2ECDD", "Work"],
    ["owner", "Owner", "Runs the business", "shop", "#C9A55A", "#26232B", "Work"],
    ["pilot", "Pilot", "Licensed to fly", "wings", "#26232B", "#E3C77E", "Work"],
    ["captain", "Captain", "At the helm", "wheel", "#8E2230", "#F2ECDD", "Work"],
    ["retired", "Retired", "Living it", "sunset", "#5E7A6C", "#FFF8EE", "Life"]
  ];
  var BY = {}; LIST.forEach(function (b) { BY[b[0]] = b; });
  function flag() {
    var s = "", i; for (i = 0; i < 13; i++) s += '<rect y="' + (i * 2) + '" width="49.4" height="2" fill="' + (i % 2 ? "#FFFFFF" : "#B22234") + '"/>';
    var st = ""; for (var r = 0; r < 5; r++) for (var c = 0; c < 6; c++) st += '<circle cx="' + (1.7 + c * 3.25 + (r % 2) * 1.6) + '" cy="' + (1.6 + r * 2.6) + '" r=".55" fill="#fff"/>';
    return '<svg class="bflag" viewBox="0 0 49.4 26" preserveAspectRatio="none" aria-hidden="true">' + s + '<rect width="19.76" height="14" fill="#3C3B6E"/>' + st + "</svg>";
  }
  function html(key, o) {
    o = o || {}; var b = BY[key]; if (!b) return "";
    var v = o.verified ? '<i class="bchk" title="Checked by SuiteFace">✓</i>' : "";
    var title = (key === "flag" ? "American flag" : b[1]) + (o.verified ? " · checked by SuiteFace" : " · self-declared");
    if (key === "flag") return '<span class="bump bflagwrap" data-b="flag" title="' + title + '" role="img" aria-label="' + title + '">' + flag() + v + "</span>";
    return '<span class="bump" data-b="' + key + '" style="--bb:' + b[4] + ";--bi:" + b[5] + '" title="' + title + '" role="img" aria-label="' + title + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + I[b[3]] + "</svg><b>" + b[1] + "</b>" + (o.sub ? "<small>" + b[2] + "</small>" : "") + v + "</span>";
  }
  function strip(keys, verified) {
    keys = (keys || []).filter(function (k) { return BY[k]; }); if (!keys.length) return "";
    verified = verified || [];
    return '<div class="bumpers">' + keys.map(function (k) { return html(k, { verified: verified.indexOf(k) > -1 }); }).join("") + "</div>";
  }
  var css = ".bumpers{display:flex;flex-wrap:wrap;justify-content:center;gap:5px;margin:6px 0 2px}" +
    ".bump{position:relative;display:inline-flex;align-items:center;gap:5px;height:24px;padding:0 9px 0 7px;border-radius:5px;background:var(--bb);color:var(--bi);" +
    "font:800 10.5px/1 Figtree,system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;" +
    "box-shadow:0 0 0 2px #FFFDF8,0 0 0 3px rgba(43,39,48,.14),0 3px 6px -2px rgba(14,12,17,.35);transform:rotate(-1.2deg)}" +
    ".bump:nth-child(2n){transform:rotate(1deg)}" +
    ".bump svg{width:15px;height:15px;flex:none}.bump small{font-weight:600;letter-spacing:.02em;text-transform:none;opacity:.8;margin-left:2px}" +
    ".bflagwrap{padding:0;overflow:visible;background:none}.bump svg.bflag{display:block;width:40px;height:24px;border-radius:4px}" +
    ".bchk{position:absolute;top:-7px;right:-7px;width:15px;height:15px;border-radius:50%;background:#C9A55A;color:#26232B;font:900 10px/15px system-ui;text-align:center;font-style:normal;box-shadow:0 0 0 1.5px #FFFDF8}" +
    ".bumpick{display:flex;flex-wrap:wrap;gap:10px 8px;margin-top:6px}" +
    ".bumpick button{all:unset;cursor:pointer;border-radius:8px;padding:5px;outline-offset:2px}" +
    ".bumpick button .bump{height:30px;font-size:12px;padding:0 11px 0 9px}.bumpick button .bump svg{width:18px;height:18px}.bumpick button .bump svg.bflag{width:50px;height:30px}" +
    ".bumpick button[aria-pressed=true]{background:rgba(201,165,90,.28);box-shadow:inset 0 0 0 2px #C9A55A}" +
    ".bumpick button:focus-visible{outline:3px solid #C9A55A}" +
    ".bumpgrp{font:700 .74rem/1 Figtree,system-ui,sans-serif;text-transform:uppercase;letter-spacing:.08em;opacity:.65;width:100%;margin-top:6px}" +
    "@media (prefers-reduced-motion:reduce){.bump{transform:none!important}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  function paint(root) { (root || document).querySelectorAll("[data-bumpers]:not([data-done])").forEach(function (el) { el.setAttribute("data-done", "1"); var a = el.getAttribute("data-bumpers").split(","), v = (el.getAttribute("data-verified") || "").split(","); el.innerHTML = strip(a, v); }); }
  window.SFBumpers = { list: LIST, by: BY, html: html, strip: strip, paint: paint };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { paint(); }); else paint();
})();

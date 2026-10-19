/* SuiteFace signing pop-up.
   SFSign.require(key, onSigned, opts) shows agreement `key` (signup | buyin | lobby | attest), or a list of keys signed together in one step,
   collects the typed /Full Name/ signature, today's date and the confirmation box, records it,
   then calls onSigned(record). Signatures are kept on this device and, once logins are live,
   sent to SuiteFace with the member's account (window.SFSign.onRecord hook). */
(function () {
  var DATA = null, loading = null;
  function load() {
    if (DATA) return Promise.resolve(DATA);
    if (!loading) loading = fetch("assets/data/agreements.json", { cache: "no-cache" }).then(function (r) { return r.json(); }).then(function (d) { DATA = d; return d; });
    return loading;
  }
  function todayISO() { var d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function ageOn(dob) { var b = new Date(dob + "T00:00:00"), n = new Date(); var a = n.getFullYear() - b.getFullYear(); if (n.getMonth() < b.getMonth() || (n.getMonth() === b.getMonth() && n.getDate() < b.getDate())) a--; return a; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  var css = ".sfs-back{position:fixed;inset:0;z-index:1000;background:rgba(10,14,12,.72);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:grid;place-items:center;padding:16px}" +
    ".sfs{width:min(620px,100%);max-height:calc(100dvh - 32px);display:flex;flex-direction:column;background:#1b1f1c;color:#F5F1E8;border:1px solid rgba(226,196,126,.35);border-radius:18px;box-shadow:0 30px 80px rgba(0,0,0,.5);font:15px/1.55 Figtree,'Segoe UI',system-ui,sans-serif;overflow:hidden}" +
    ".sfs h2{margin:0;font:400 1.55rem/1.15 Gloock,Georgia,serif;color:#F5F1E8}" +
    ".sfs header{padding:18px 20px 12px;border-bottom:1px solid rgba(245,241,232,.1)}.sfs header p{margin:4px 0 0;color:#A9A79E;font-size:.86rem}" +
    ".sfs .doc{padding:12px 20px;overflow:auto;color:#CFCABD}.sfs .doc strong{color:#F5F1E8}.sfs .doc li{margin:.35em 0}" +
    ".sfs .ag{border:1px solid rgba(245,241,232,.12);border-radius:12px;margin:0 0 8px;background:rgba(245,241,232,.03)}" +
    ".sfs .ag summary{list-style:none;cursor:pointer;display:grid;grid-template-columns:1fr auto;gap:2px 12px;padding:11px 14px;align-items:center}.sfs .ag summary::-webkit-details-marker{display:none}" +
    ".sfs .ag summary b{font-weight:700;color:#F5F1E8}.sfs .ag summary small{grid-column:1;color:#A9A79E;font-size:.82rem}" +
    ".sfs .ag summary a{grid-row:1/span 2;grid-column:2;color:#E2C47E;font-size:.85rem;font-weight:600;text-decoration:none;white-space:nowrap}.sfs .ag summary a:hover{text-decoration:underline}" +
    ".sfs .ag summary::after{content:'Show';grid-column:1;font-size:.78rem;color:#E2C47E;opacity:.8}.sfs .ag[open] summary::after{content:'Hide'}" +
    ".sfs .ag .agb{padding:0 14px 12px;font-size:.9rem;border-top:1px solid rgba(245,241,232,.08)}" +
    ".sfs .sfs-foot{padding:14px 20px 18px;border-top:1px solid rgba(245,241,232,.1);background:#171a18;display:grid;gap:10px}" +
    ".sfs label{display:grid;gap:4px;font-weight:600;font-size:.9rem}.sfs .row{display:grid;grid-template-columns:1fr 170px;gap:10px}@media(max-width:520px){.sfs .row{grid-template-columns:1fr}}" +
    ".sfs-back .sfs input[type=text],.sfs-back .sfs input[type=date]{font:500 1rem Figtree,system-ui,sans-serif;color:#F5F1E8;background:#121513;border:1px solid rgba(245,241,232,.18);border-radius:10px;padding:.6rem .7rem;color-scheme:dark;box-shadow:none;width:100%;box-sizing:border-box}" +
    ".sfs input:focus-visible{outline:2px solid #E2C47E;outline-offset:1px}.sfs input.sig{font-family:'Brush Script MT','Segoe Script',cursive;font-size:1.35rem}" +
    ".sfs .chk{display:flex;gap:10px;align-items:flex-start;font-weight:500}.sfs .chk input{width:20px;height:20px;margin-top:2px;accent-color:#C9A24E;flex:none}" +
    ".sfs .err{color:#E5736E;font-size:.88rem;min-height:1.2em}.sfs .btns{display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap}" +
    ".sfs button{cursor:pointer;border:0;border-radius:999px;padding:.7rem 1.3rem;font:700 .98rem Figtree,system-ui,sans-serif}" +
    ".sfs .go{background:#E2C47E;color:#1b1f1c}.sfs .go:disabled{opacity:.4;cursor:not-allowed}.sfs .no{background:transparent;color:#F5F1E8;border:1px solid rgba(245,241,232,.25)}";
  var styled = false;

  /* key can be one agreement or a list. A list is signed once: one name, one date, one box, recorded for each agreement. */
  function open(key, onSigned, opts) {
    opts = opts || {};
    var keys = Array.isArray(key) ? key.slice() : [key];
    load().then(function (d) {
      var list = keys.map(function (k) { return [k, d[k]]; }).filter(function (x) { return x[1]; });
      if (!list.length) { alert("Agreement not found: " + keys.join(", ")); return; }
      if (!styled) { var s = document.createElement("style"); s.textContent = css; document.head.appendChild(s); styled = true; }
      var many = list.length > 1, hasSignup = keys.indexOf("signup") > -1;
      var back = document.createElement("div"); back.className = "sfs-back";
      var about = opts.about ? '<p style="margin:0 0 8px;color:#F5F1E8"><b>About:</b> ' + esc(opts.about) + "</p>" : "";
      var dob = hasSignup ? '<label>Date of birth<input type="date" id="sfsDob" max="' + todayISO() + '" required></label>' : "";
      var body = many
        ? list.map(function (x) { return '<details class="ag"><summary><b>' + esc(x[1].title) + "</b><small>" + esc(x[1].when || "") + '</small><a href="agreements/' + x[0] + '.html" target="_blank" rel="noopener">Full agreement</a></summary><div class="agb">' + x[1].html + "</div></details>"; }).join("")
        : list[0][1].html + '<p style="font-size:.85rem"><a href="agreements/' + list[0][0] + '.html" target="_blank" rel="noopener" style="color:#E2C47E">Open the full agreement</a> · <a href="agreements.html" target="_blank" rel="noopener" style="color:#E2C47E">All agreements</a></p>';
      back.innerHTML = '<div class="sfs" role="dialog" aria-modal="true" aria-labelledby="sfsT">' +
        '<header><h2 id="sfsT">' + (many ? "Sign once" : esc(list[0][1].title)) + "</h2><p>" +
          (many ? "One signature covers all " + list.length + " agreements below. You won't be asked again when you buy chips or play a deck." : "SuiteFace Inc. · Version " + esc(list[0][1].version) + " · Read it, then sign below.") + "</p></header>" +
        '<div class="doc">' + about + body + (many ? '<p style="font-size:.85rem;margin:6px 0 0">Tap any agreement to read it here, or open it on its own page. <a href="agreements.html" target="_blank" rel="noopener" style="color:#E2C47E">All agreements on one page</a>.</p>' : "") + "</div>" +
        '<div class="sfs-foot">' + dob +
          '<div class="row"><label>Type your full legal name between slashes<input class="sig" type="text" id="sfsName" placeholder="/First Middle Last/" autocomplete="name"></label>' +
          '<label>Date<input type="date" id="sfsDate" value="' + todayISO() + '"></label></div>' +
          '<label class="chk"><input type="checkbox" id="sfsOk"><span>I have read ' + (many ? "these " + list.length + " agreements" : "this agreement") + ", I am 18 or older, and I sign electronically.</span></label>" +
          '<div class="err" id="sfsErr" role="alert"></div>' +
          '<div class="btns"><button type="button" class="no" id="sfsNo">Cancel</button><button type="button" class="go" id="sfsGo" disabled>' + (many ? "Sign all and agree" : "I sign and agree") + "</button></div>" +
        "</div></div>";
      document.body.appendChild(back);
      var $ = function (id) { return back.querySelector("#" + id); };
      var prevFocus = document.activeElement; $("sfsName").focus();
      function valid(show) {
        var name = $("sfsName").value.trim(), err = "";
        if (!/^\/[A-Za-z][A-Za-z.'\- ]*[A-Za-z.]\s+[A-Za-z][A-Za-z.'\- ]*\/$/.test(name)) err = "Type your first and last name between slashes, like /Jordan Lee Smith/.";
        else if (opts.expectName && name.slice(1, -1).toLowerCase().replace(/\s+/g, " ") !== opts.expectName.toLowerCase()) err = "The name must match the name on your account.";
        else if ($("sfsDate").value !== todayISO()) err = "Select today's date.";
        else if (hasSignup && (!$("sfsDob").value || ageOn($("sfsDob").value) < 18)) err = $("sfsDob").value ? "SuiteFace is for adults 18 and older only." : "Enter your date of birth.";
        else if (!$("sfsOk").checked) err = "Check the box to confirm.";
        $("sfsGo").disabled = !!err; if (show) $("sfsErr").textContent = err; return !err;
      }
      if ($("sfsDob") && window.SF_getDob && window.SF_getDob()) $("sfsDob").value = window.SF_getDob();
      ["sfsName", "sfsDate", "sfsOk", "sfsDob"].forEach(function (id) { var el = $(id); if (el) { el.addEventListener("input", function () { valid(false); $("sfsErr").textContent = ""; }); el.addEventListener("change", function () { valid(true); }); el.addEventListener("blur", function () { valid(true); }); } });
      function close() { back.remove(); document.removeEventListener("keydown", onKey); if (prevFocus && prevFocus.focus) prevFocus.focus(); }
      function onKey(e) { if (e.key === "Escape") close(); }
      document.addEventListener("keydown", onKey);
      $("sfsNo").onclick = close;
      $("sfsGo").onclick = function () {
        if (!valid(true)) return;
        $("sfsGo").disabled = true;
        var now = new Date().toISOString(), recs = list.map(function (x) {
          return { agreement: x[0], title: x[1].title, version: x[1].version, signature: $("sfsName").value.trim(), signed_date: $("sfsDate").value,
            signed_at: now, about: opts.about || null, dob: x[0] === "signup" ? $("sfsDob").value : undefined, device: navigator.userAgent };
        });
        try { var all = JSON.parse(localStorage.getItem("sf_signatures") || "[]"); localStorage.setItem("sf_signatures", JSON.stringify(all.concat(recs))); } catch (e) {}
        var chain = Promise.resolve();
        recs.forEach(function (rec) { chain = chain.then(function () { return window.SFSign.onRecord ? window.SFSign.onRecord(rec) : null; }); });
        chain.then(function () { close(); onSigned && onSigned(many ? recs : recs[0]); }, function (e) { $("sfsGo").disabled = false; $("sfsErr").textContent = (e && e.message) || "Couldn't save your signature. Try again."; });
      };
    }, function () { alert("Couldn't load the agreement. Check your connection and try again."); });
  }
  window.SFSign = { require: open, onRecord: null };
})();

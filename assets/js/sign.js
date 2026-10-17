/* SuiteFace signing pop-up.
   SFSign.require(key, onSigned, opts) shows agreement `key` (signup | buyin | lobby | attest),
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

  var css = ".sfs-back{position:fixed;inset:0;z-index:1000;background:rgba(10,8,14,.78);backdrop-filter:blur(4px);display:grid;place-items:center;padding:16px}" +
    ".sfs{width:min(640px,100%);max-height:calc(100dvh - 32px);display:flex;flex-direction:column;background:#211d27;color:#FAF7F0;border:1px solid rgba(232,196,106,.5);border-radius:16px;box-shadow:0 30px 80px rgba(0,0,0,.6);font:15px/1.55 Figtree,'Segoe UI',system-ui,sans-serif;overflow:hidden}" +
    ".sfs h2{margin:0;font:800 1.6rem/1.05 'Big Shoulders Display','Arial Narrow',Impact,sans-serif;text-transform:uppercase;letter-spacing:.03em;color:#E8C46A}" +
    ".sfs header{padding:18px 20px 10px;border-bottom:1px solid rgba(250,247,240,.12)}.sfs header p{margin:4px 0 0;color:#A69DB0;font-size:.85rem}" +
    ".sfs .doc{padding:14px 20px;overflow:auto;color:#CFC6B6}.sfs .doc strong{color:#FAF7F0}.sfs .doc li{margin:.35em 0}" +
    ".sfs .sfs-foot{padding:14px 20px 18px;border-top:1px solid rgba(250,247,240,.12);background:#1a1720;display:grid;gap:10px}" +
    ".sfs label{display:grid;gap:4px;font-weight:600;font-size:.9rem}.sfs .row{display:grid;grid-template-columns:1fr 170px;gap:10px}@media(max-width:520px){.sfs .row{grid-template-columns:1fr}}" +
    ".sfs input[type=text],.sfs input[type=date]{font:500 1rem Figtree,system-ui,sans-serif;color:#FAF7F0;background:#120f16;border:1px solid rgba(250,247,240,.2);border-radius:10px;padding:.6rem .7rem;color-scheme:dark}" +
    ".sfs input.sig{font-family:'Brush Script MT','Segoe Script',cursive;font-size:1.35rem}" +
    ".sfs .chk{display:flex;gap:10px;align-items:flex-start;font-weight:500}.sfs .chk input{width:20px;height:20px;margin-top:2px;accent-color:#B8862F}" +
    ".sfs .err{color:#E5505E;font-size:.88rem;min-height:1.2em}.sfs .btns{display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap}" +
    ".sfs button{cursor:pointer;border:0;border-radius:10px;padding:.7rem 1.1rem;font:800 1.05rem 'Big Shoulders Display','Arial Narrow',sans-serif;text-transform:uppercase;letter-spacing:.08em}" +
    ".sfs .go{background:linear-gradient(180deg,#E8C46A,#B8862F);color:#2a1a05}.sfs .go:disabled{opacity:.4;cursor:not-allowed}.sfs .no{background:transparent;color:#FAF7F0;border:1px solid rgba(250,247,240,.25)}";
  var styled = false;

  function open(key, onSigned, opts) {
    opts = opts || {};
    load().then(function (d) {
      var a = d[key]; if (!a) { alert("Agreement not found: " + key); return; }
      if (!styled) { var s = document.createElement("style"); s.textContent = css; document.head.appendChild(s); styled = true; }
      var back = document.createElement("div"); back.className = "sfs-back";
      var about = opts.about ? '<p style="margin:0 0 8px;color:#FAF7F0"><b>About:</b> ' + esc(opts.about) + "</p>" : "";
      var dob = key === "signup" ? '<label>Date of birth<input type="date" id="sfsDob" max="' + todayISO() + '" required></label>' : "";
      back.innerHTML = '<div class="sfs" role="dialog" aria-modal="true" aria-labelledby="sfsT">' +
        '<header><h2 id="sfsT">' + esc(a.title) + '</h2><p>SuiteFace Inc., a Florida corporation · Version ' + esc(a.version) + ' · Read it, then sign below.</p></header>' +
        '<div class="doc">' + about + a.html + '<p style="font-size:.85rem">Full <a href="terms.html" target="_blank" rel="noopener">Terms of Service</a>.</p></div>' +
        '<div class="sfs-foot">' + dob +
          '<div class="row"><label>Type your full legal name between slashes<input class="sig" type="text" id="sfsName" placeholder="/First Middle Last/" autocomplete="name"></label>' +
          '<label>Date<input type="date" id="sfsDate"></label></div>' +
          '<label class="chk"><input type="checkbox" id="sfsOk"><span>I have read this agreement, I am 18 or older, and I sign it electronically.</span></label>' +
          '<div class="err" id="sfsErr" role="alert"></div>' +
          '<div class="btns"><button type="button" class="no" id="sfsNo">Cancel</button><button type="button" class="go" id="sfsGo" disabled>I Sign and Agree</button></div>' +
        "</div></div>";
      document.body.appendChild(back);
      var $ = function (id) { return back.querySelector("#" + id); };
      var prevFocus = document.activeElement; $("sfsName").focus();
      function valid(show) {
        var name = $("sfsName").value.trim(), err = "";
        if (!/^\/[A-Za-z][A-Za-z.'\- ]*[A-Za-z.]\s+[A-Za-z][A-Za-z.'\- ]*\/$/.test(name)) err = "Type your first and last name between slashes, like /Jordan Lee Smith/.";
        else if (opts.expectName && name.slice(1, -1).toLowerCase().replace(/\s+/g, " ") !== opts.expectName.toLowerCase()) err = "The name must match the name on your account.";
        else if ($("sfsDate").value !== todayISO()) err = "Select today's date.";
        else if (key === "signup" && (!$("sfsDob").value || ageOn($("sfsDob").value) < 18)) err = $("sfsDob").value ? "SuiteFace is for adults 18 and older only." : "Enter your date of birth.";
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
        var rec = { agreement: key, title: a.title, version: a.version, signature: $("sfsName").value.trim(), signed_date: $("sfsDate").value,
          signed_at: new Date().toISOString(), about: opts.about || null, dob: key === "signup" ? $("sfsDob").value : undefined, device: navigator.userAgent };
        try { var all = JSON.parse(localStorage.getItem("sf_signatures") || "[]"); all.push(rec); localStorage.setItem("sf_signatures", JSON.stringify(all)); } catch (e) {}
        var send = window.SFSign.onRecord ? Promise.resolve(window.SFSign.onRecord(rec)) : Promise.resolve();
        send.then(function () { close(); onSigned && onSigned(rec); }, function (e) { $("sfsErr").textContent = (e && e.message) || "Couldn't save your signature. Try again."; });
      };
    }, function () { alert("Couldn't load the agreement. Check your connection and try again."); });
  }
  window.SFSign = { require: open, onRecord: null };
})();

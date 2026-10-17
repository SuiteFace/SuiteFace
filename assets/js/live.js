/* SuiteFace live accounts: real sign-in through Supabase Auth (email + Google, Apple, Facebook and more).
   Exposes window.SF_LIVE once the visitor is signed in, and window.SF_AUTH for the login screen.
   The publishable key in config.js is public by design; the database rules decide what it can do.
   A provider's button only appears after it is switched on in Supabase (Authentication → Sign In / Providers). */
(function () {
  var CFG = window.SUITEFACE_CONFIG || {};
  if (!CFG.supabaseUrl || !CFG.supabaseKey) return;
  var PROVIDERS = [
    ["google", "Google"], ["apple", "Apple"], ["facebook", "Facebook"],
    ["twitter", "X"], ["discord", "Discord"], ["linkedin_oidc", "LinkedIn"]
  ];
  var client = null, session = null, me = null, enabled = null, readyCbs = [];

  function back() { return location.origin + location.pathname.replace(/[^/]*$/, ""); }
  function emit() { var ev; try { ev = new CustomEvent("sf:live", { detail: { signedIn: !!session, role: me && me.role } }); } catch (e) { ev = document.createEvent("Event"); ev.initEvent("sf:live", true, true); } document.dispatchEvent(ev); }

  function settings() {
    if (enabled) return Promise.resolve(enabled);
    return fetch(CFG.supabaseUrl + "/auth/v1/settings", { headers: { apikey: CFG.supabaseKey } })
      .then(function (r) { return r.json(); })
      .then(function (s) { var ext = (s && s.external) || {}; enabled = PROVIDERS.filter(function (p) { return ext[p[0]]; }); enabled.email = ext.email !== false; return enabled; })
      .catch(function () { enabled = []; enabled.email = true; return enabled; });
  }

  function loadMe() {
    if (!session) { me = null; window.SF_LIVE = null; emit(); return Promise.resolve(null); }
    return client.rpc("whoami").then(function (r) {
      var row = r.data && (Array.isArray(r.data) ? r.data[0] : r.data);
      me = row || null;
      window.SF_LIVE = {
        client: client,
        session: function () { return session; },
        token: function () { return session && session.access_token; },
        email: function () { return session && session.user && session.user.email; },
        memberId: function () { return me && me.member_id; },
        role: me ? me.role : "player",
        seated: !!(me && me.seated),
        rpc: function (fn, args) { return client.rpc(fn, args || {}); },
        uploadStatement: function (file) {
          var ext = (file.name.split(".").pop() || "pdf").toLowerCase().replace(/[^a-z0-9]/g, "");
          var path = me.member_id + "/" + Date.now() + "-" + Math.random().toString(36).slice(2, 8) + "." + ext;
          return client.storage.from("hr-statements").upload(path, file, { upsert: false }).then(function (r) { if (r.error) throw r.error; return path; });
        },
        linkIdentity: function (prov) { return AUTH.link(prov); },
        signOut: function () { return AUTH.signOut(); }
      };
      emit(); return me;
    });
  }

  var AUTH = window.SF_AUTH = {
    ready: function (cb) { if (AUTH.__ready) cb(); else readyCbs.push(cb); },
    providers: settings,
    signedIn: function () { return !!session; },
    oauth: function (prov) {
      return client.auth.signInWithOAuth({ provider: prov, options: { redirectTo: back() + "?signedin=1" } }).then(function (r) { if (r.error) throw r.error; });
    },
    link: function (prov) {
      var p = prov === "x" ? "twitter" : prov;
      return settings().then(function (list) {
        if (!list.some(function (x) { return x[0] === p; })) throw new Error("Linking " + prov + " opens soon.");
        return client.auth.linkIdentity({ provider: p, options: { redirectTo: back() + "?linked=" + p + "#face" } });
      }).then(function (r) { if (r && r.error) throw r.error; });
    },
    password: function (email, pass) { return client.auth.signInWithPassword({ email: email, password: pass }).then(function (r) { if (r.error) throw r.error; return r; }); },
    signUp: function (email, pass) {
      return client.auth.signUp({ email: email, password: pass, options: { emailRedirectTo: back() + "?signedin=1" } }).then(function (r) { if (r.error) throw r.error; return r; });
    },
    magic: function (email) { return client.auth.signInWithOtp({ email: email, options: { emailRedirectTo: back() + "?signedin=1" } }).then(function (r) { if (r.error) throw r.error; }); },
    reset: function (email) { return client.auth.resetPasswordForEmail(email, { redirectTo: back() + "?reset=1" }).then(function (r) { if (r.error) throw r.error; }); },
    newPassword: function (pass) { return client.auth.updateUser({ password: pass }).then(function (r) { if (r.error) throw r.error; }); },
    signOut: function () { return client.auth.signOut().then(function () { session = null; return loadMe(); }); },
    refresh: loadMe,
    /* Buy-In: makes sure the Sign-up Agreement, Release and Buy-In Agreement are signed on the account,
       then sends the member to Stripe tagged with their member id so the webhook seats them. */
    checkout: function (link, extra) {
      function go() {
        return client.rpc("my_checkout_reference").then(function (r) {
          if (!r.error) {
            var u = link + (link.indexOf("?") < 0 ? "?" : "&") + "client_reference_id=" + encodeURIComponent(r.data) + "&prefilled_email=" + encodeURIComponent(session.user.email || "") + (extra || "");
            location.href = u; return;
          }
          var msg = r.error.message || "";
          if (/Sign-up Agreement/i.test(msg)) return sign("signup").then(function () { return sign("release"); }).then(function () { return sign("buyin"); }).then(go);
          if (/Buy-In Agreement/i.test(msg)) return sign("buyin").then(go);
          throw r.error;
        });
      }
      return go();
    }
  };
  function sign(key) { return new Promise(function (res) { window.SFSign.require(key, function () { res(); }); }); }

  // Signatures go to the member's account when they're signed in.
  function hookSign() {
    if (!window.SFSign) return;
    window.SFSign.onRecord = function (rec) {
      if (!session) return null;
      return client.rpc("sign_agreement", { agreement: rec.agreement, version: rec.version, signature: rec.signature, signed_date: rec.signed_date, dob: rec.dob || null, about: null, device: rec.device })
        .then(function (r) { if (r.error) throw r.error; });
    };
  }

  function start() {
    client = window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "implicit" } });
    hookSign();
    client.auth.onAuthStateChange(function (ev, s) {
      var was = session && session.user && session.user.id; session = s;
      if (ev === "PASSWORD_RECOVERY") document.dispatchEvent(new Event("sf:recovery"));
      if ((s && s.user && s.user.id) !== was) loadMe();
    });
    // A confirmation or sign-in link that failed (expired, already used) comes back with an error in the URL.
    var errm = (location.hash + "&" + location.search).match(/error_description=([^&]+)/);
    if (errm) {
      var msg = decodeURIComponent(errm[1].replace(/\+/g, " "));
      setTimeout(function () { alert("That sign-in link didn't work: " + msg + ". Go to Log in and tap \"Email me a sign-in link\" to get a fresh one."); }, 600);
      history.replaceState(null, "", location.pathname);
    }
    client.auth.getSession().then(function (r) { session = r.data && r.data.session; return loadMe(); }).then(function () {
      AUTH.__ready = true;
      readyCbs.splice(0).forEach(function (cb) { cb(); });
      if (/[?&](signedin|linked)=/.test(location.search) || /access_token=/.test(location.hash)) history.replaceState(null, "", location.pathname + (/access_token=/.test(location.hash) ? "" : location.hash));
    });
  }
  if (window.supabase && window.supabase.createClient) start();
  else {
    var s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js";
    s.crossOrigin = "anonymous"; s.onload = start;
    s.onerror = function () { readyCbs.splice(0).forEach(function (cb) { cb(new Error("offline")); }); };
    document.head.appendChild(s);
  }
})();

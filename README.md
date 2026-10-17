# SuiteFace.com: put it online for free

This folder is the whole website. There's no build step: what you see is what goes live.

```
index.html            the page
assets/css/site.css   all styling (colors, fonts, layout)
assets/js/app.js      all movement and features (sign lights, quiz, deck, forms)
assets/js/config.js   your settings: the form key lives here
assets/brand/         logo, icons, Vegas sign image
CNAME                 tells GitHub your domain is suiteface.com
404.html, robots.txt, sitemap.xml, site.webmanifest, favicon.ico
```

**If you know BigCommerce:** uploading these files to GitHub works like WebDAV, and `assets/js/` works like Script Manager. You edit a script file, upload it, and the site updates.

---

## Option A: GitHub Pages (free, recommended)

GitHub stores the files and serves them as a website. Public sites are free, and HTTPS on your own domain is included.

1. **Create the account.** Go to github.com and sign up with `thesuiteface@gmail.com`. Turn on two-step verification (Settings → Password and authentication).
2. **Create the repository.** Click **+** → **New repository**. Name it `suiteface.com` and set it to **Public**. Check **Add a README**, then click **Create repository**.
3. **Upload the site.** In the repository, click **Add file → Upload files**. Drag in **everything inside this folder** (not the folder itself), including `CNAME` and `.nojekyll`.
   - On a Mac, press `Cmd+Shift+.` in Finder to see `.nojekyll`. On Windows: View → Show → Hidden items.
   - Scroll down and click **Commit changes**.
4. **Turn on Pages.** Go to **Settings → Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then click **Save**.
   - In a minute or two your site appears at `https://<your-username>.github.io/suiteface.com/`.
5. **Connect suiteface.com.** In **Settings → Pages → Custom domain**, type `suiteface.com` and click **Save**. Then, at the company where you bought the domain, add these DNS records:

   | Type | Name | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | `<your-username>.github.io` |

   Check these addresses against GitHub's current guide, "Managing a custom domain for your GitHub Pages site," before you save them. DNS can take up to 24 hours.
6. **Turn on HTTPS.** Back in **Settings → Pages**, tick **Enforce HTTPS** once it's available.

**To update the site later:** open the file on GitHub, click the pencil icon, edit it, and click **Commit changes**. Or upload a new copy of the file. The live site refreshes within a minute or two.

## Option B: Replit

1. Create a new **HTML, CSS, JS** Repl.
2. Delete its starter files, then drag in everything from this folder.
3. Click **Run** to preview the site.
4. Publishing a Repl to a custom domain may need a paid Replit plan. For a free public site on suiteface.com, use GitHub Pages and keep Replit for editing and testing.

## Make the forms deliver to hello@suiteface.com (free)

The waitlist, contact, partners and feedback forms send through **Web3Forms**. Its free plan allows 250 messages a month.

1. Make sure the `hello@suiteface.com` mailbox exists and you can read it.
2. Go to web3forms.com, enter `hello@suiteface.com`, and create an access key. The key arrives in that mailbox.
3. Open `assets/js/config.js`, paste the key between the quotes after `formAccessKey:`, and commit.
4. **Test it:** submit the waitlist form on the live site. You should see a reference number like `SF-2026-K3F9Q2`, and an email with the same number should land in hello@suiteface.com.
   - Until the key is added, every form says **Preview mode** and sends nothing. The site never shows a reference number unless the message actually went through.

## What this version is, and isn't

- **It's a preview.** The quiz, profile, deck, burns, plays and Pairs run in the visitor's browser and are saved only there. The 260 sample people are fictional, with illustrated initials, never real photos.
- **Before real people can date on it,** SuiteFace needs a back end: accounts, real matching, photo checks, reports, blocking and moderation (the Stage 1–2 build). Forms and the waitlist work for real as soon as the Web3Forms key is in.
- **Never put passwords in these files.** The site is public on GitHub.

## Take payments with Stripe ($21.00 Buy-In + $2.10 a month)

1. Follow the **Stripe Setup Step Sheet** in the Master Control kit (folder 13) to create the products, the membership Payment Link and the customer portal.
2. Paste the two links into `assets/js/config.js`:
   - `stripePaymentLink`: the membership checkout (`https://buy.stripe.com/...`)
   - `stripePortalLink`: where members update their card or cancel
3. Leave `stripeJokerBuyoutLink` empty until your attorney approves the $2,100 Joker buy-out.
4. Test in Stripe **Test mode** first. The site always asks members to tick the consent box before checkout opens. Until a link is added, the buttons say **Preview mode** and take no payment.

Only links go in `config.js`. Never paste a Stripe secret key (`sk_...`) anywhere in the website.

## ZIP codes and the Table Map

`assets/data/zips.psv` holds 38,982 active US ZIP codes, built from your ZIP code database. The site uses it to:
- turn a member's ZIP into a city,
- measure "about X miles" between ZIP centers,
- draw the Table Map.

It loads in the background (about 1.4 MB, smaller once GitHub compresses it).

## "Use my current location"

The location button works on the live site because GitHub Pages serves it over HTTPS. Browsers only share location on secure sites, and only after the visitor says yes. The site rounds the position to the nearest ZIP code and keeps only that ZIP. Visitors can always type a ZIP or a city instead.

## Sensitive profile answers

The profile asks optional questions about race, orientation, income, faith, politics, housing and relationship style. Every one has "Prefer not to say," and sensitive answers start **Face Down** (private). Before real members sign up, your privacy policy must say how these answers are used. Have your attorney review it: several states treat this kind of data as sensitive and require clear consent.

## Logins, roles and what's real

The site has five views: **Guest** (demo, quiz, membership), **Player** (paid member), **Dealer** (staff moderation), **Pit Boss** (IT checks) and **Owner** (house numbers).

In this static version, the role switch and the login screen are a **demo**. Anyone can read a static website's files, so nothing private can be protected here, which is why every console shows **sample data only**.

Real logins, real member data and real payments need a back end: an auth service, a database with role-based rules, and Stripe webhooks. The Pit Boss checks are real, though: they test this browser, the config and the ZIP data.

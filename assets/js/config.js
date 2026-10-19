/* SuiteFace site settings — the only file you need to edit. Never put passwords or secret keys here: this file is public.
   supabaseUrl / supabaseKey  your database. The publishable key is made to be public: the database rules decide what it can do.
   formAccessKey         optional: also email each form to help@ via Web3Forms access key (create it at web3forms.com with help@suiteface.com).
   stripePaymentLink     Stripe Payment Link for the $21.00 Buy-In + $2.10/month membership (https://buy.stripe.com/...).
   stripeLaunchLink      launch offer: $2.10/month only, Buy-In waived (ends Dec 31, 2026 at 11:59 pm CT).
   stripePortalLink      Stripe customer portal login link, so members can update cards, see receipts or cancel.
   stripeJokerBuyoutLink  $2,100 public-Joker buy-out. stripeJokerLobbyLink $210 Joker Maker Lobby entry. stripeJokerRemovalLink $210 lobby-Joker removal.
   stripeRaiseLink       $2.10 one-time Raise (Dealer date prep). dealerUrl  the Ask the Dealer function (the AI key lives in Supabase, never here).
   Anything left empty runs in Preview mode: nothing is sent and no payment is taken. */
window.SUITEFACE_CONFIG = {
  formAccessKey: "",
  stripePaymentLink: "https://buy.stripe.com/4gMcN70tZ8ymcOG9Me2oE0a",
  stripeLaunchLink: "https://buy.stripe.com/5kQ8wRgsX29Y15YbUm2oE0b",
  stripeAnnualLink: "https://buy.stripe.com/bJeaEZfoT5mabKC4rU2oE0k",
  stripeAnnualLaunchLink: "https://buy.stripe.com/bJe7sNekP3e2eWO4rU2oE0l",
  // Oct 19 model: a $21 seat for 365 days (one-time payment, no auto-renew) and chip stacks. Decks are $2.10 in chips.
  stripeSeatYearLink: "https://buy.stripe.com/aFa8wRb8D29Y6qi3nQ2oE0p",
  stripeChips: { "210": "https://buy.stripe.com/7sYbJ390v01Q9Cu0bE2oE0m", "2100": "https://buy.stripe.com/8x214p4KfeWK4ia4rU2oE0n", "21000": "https://buy.stripe.com/4gM9AV3Gb6qe3e63nQ2oE0o" },
  stripePortalLink: "https://billing.stripe.com/p/login/fZuaEZ5Oj5macOGgaC2oE00",
  stripeJokerBuyoutLink: "https://buy.stripe.com/14A14p90v5ma9CugaC2oE0e",
  stripeJokerLobbyLink: "https://buy.stripe.com/fZu4gB5Oj4i63e6aQi2oE0c",
  stripeJokerRemovalLink: "https://buy.stripe.com/3cIfZj7Wr8ym7um5vY2oE0d",
  stripeRaiseLink: "https://buy.stripe.com/8x24gBekP01Q01U9Me2oE0f",
  dealerUrl: "https://huiuztyvqzxfvqnjdswl.supabase.co/functions/v1/ask-dealer",
  stripePartnerLink: "https://buy.stripe.com/6oU9AV90vaGu3e62jM2oE0g",
  stripeHighRollerLink: "https://buy.stripe.com/14AaEZa4zaGug0S7E62oE0i",
  stripeHrSponsorLink: "https://buy.stripe.com/cNiaEZ90v01QbKC3nQ2oE0j",
  supabaseUrl: "https://huiuztyvqzxfvqnjdswl.supabase.co",
  supabaseKey: "sb_publishable_jIViI02IuEYNwK5ZsjvFYQ_7mIavgMV",
  siteUrl: "https://suiteface.com/",
  zipDataUrl: "assets/data/zips.psv"
};

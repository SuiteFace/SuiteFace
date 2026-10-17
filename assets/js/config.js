/* SuiteFace site settings — the only file you need to edit. Never put passwords or secret keys here: this file is public.
   supabaseUrl / supabaseKey  your database. The publishable key is made to be public: the database rules decide what it can do.
   formAccessKey         optional: also email each form to help@ via Web3Forms access key (create it at web3forms.com with help@suiteface.com).
   stripePaymentLink     Stripe Payment Link for the $21.00 Buy-In + $2.10/month membership (https://buy.stripe.com/...).
   stripeLaunchLink      launch offer: $2.10/month only, Buy-In waived (15 days, ends Oct 31, 2026).
   stripePortalLink      Stripe customer portal login link, so members can update cards, see receipts or cancel.
   stripeJokerBuyoutLink  $2,100 public-Joker buy-out. stripeJokerLobbyLink $210 Joker Maker Lobby entry. stripeJokerRemovalLink $210 lobby-Joker removal.
   stripeRaiseLink       $2.10 one-time Raise (Dealer date prep). dealerUrl  the Ask the Dealer function (the AI key lives in Supabase, never here).
   Anything left empty runs in Preview mode: nothing is sent and no payment is taken. */
window.SUITEFACE_CONFIG = {
  formAccessKey: "",
  stripePaymentLink: "https://buy.stripe.com/test_bJeeVdeGTdCX4ZY2To14400",
  stripeLaunchLink: "https://buy.stripe.com/test_28EdR98iv7ezdwudy21440b",
  stripePortalLink: "https://billing.stripe.com/p/login/fZuaEZ5Oj5macOGgaC2oE00",
  stripeJokerBuyoutLink: "https://buy.stripe.com/test_8x25kD6aneH1fEC8dI14403",
  stripeJokerLobbyLink: "https://buy.stripe.com/test_28E9AT2Yb0QbgIGalQ14401",
  stripeJokerRemovalLink: "https://buy.stripe.com/test_8x200j56j7ez0JIctY14402",
  stripeRaiseLink: "https://buy.stripe.com/test_7sY7sL0Q32Yj2RQbpU14404",
  dealerUrl: "https://huiuztyvqzxfvqnjdswl.supabase.co/functions/v1/ask-dealer",
  stripePartnerLink: "https://buy.stripe.com/test_14A3cvaqD0QbfECgKe14406",
  stripeHighRollerLink: "https://buy.stripe.com/test_5kQdR99mzbuP3VU0Lg14409",
  stripeHrSponsorLink: "https://buy.stripe.com/test_eVq14nbuH42n3VU8dI1440a",
  supabaseUrl: "https://huiuztyvqzxfvqnjdswl.supabase.co",
  supabaseKey: "sb_publishable_jIViI02IuEYNwK5ZsjvFYQ_7mIavgMV",
  siteUrl: "https://suiteface.com/",
  zipDataUrl: "assets/data/zips.psv"
};

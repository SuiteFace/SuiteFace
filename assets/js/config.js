/* SuiteFace site settings — the only file you need to edit. Never put passwords or secret keys here: this file is public.
   formAccessKey         free Web3Forms access key (create it at web3forms.com with hello@suiteface.com).
   stripePaymentLink     Stripe Payment Link for the $21.00 Buy-In + $2.10/month membership (https://buy.stripe.com/...).
   stripePortalLink      Stripe customer portal login link, so members can update cards, see receipts or cancel.
   stripeJokerBuyoutLink Stripe Payment Link for the $2,100.00 Joker buy-out. Leave empty until counsel approves it.
   Anything left empty runs in Preview mode: nothing is sent and no payment is taken. */
window.SUITEFACE_CONFIG = {
  formAccessKey: "",
  stripePaymentLink: "https://buy.stripe.com/test_bJeeVdeGTdCX4ZY2To14400",
  stripePortalLink: "https://billing.stripe.com/p/login/test_bJeeVdeGTdCX4ZY2To14400",
  stripeJokerBuyoutLink: "",
  siteUrl: "https://suiteface.com/",
  zipDataUrl: "assets/data/zips.psv"
};

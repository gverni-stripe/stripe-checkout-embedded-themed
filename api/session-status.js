const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  // apiVersion: '2020-08-27',
  appInfo: {
    name: "stripe-checkout-embedded-themed",
    url: "https://github.com/gverni-stripe/stripe-checkout-embedded-themed",
  },
});

export default async function handler(request, response) {
  const session = await stripe.checkout.sessions.retrieve(
    request.query.session_id
  );

  return response.json({
    status: session.status,
    customer_email: session.customer_details.email,
  });
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  // apiVersion: '2020-08-27',
  appInfo: {
    name: "stripe-checkout-embedded-themed-setup",
    url: "https://github.com/gverni-stripe/stripe-checkout-embedded-themed"
  }
});

exports.handler = async () => {
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    mode: "setup",
    customer_creation: "always",
    currency: "gbp",
    return_url: `${process.env.URL}/return.html?session_id={CHECKOUT_SESSION_ID}`,
  });

  // res.send({ clientSecret: session.client_secret });

  return {
    statusCode: 200,
    body: JSON.stringify({ clientSecret: session.client_secret }),
  };
};

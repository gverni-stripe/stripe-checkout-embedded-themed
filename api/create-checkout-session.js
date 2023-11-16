const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  // apiVersion: '2020-08-27',
  appInfo: {
    name: "stripe-checkout-embedded-themed",
    url: "https://github.com/gverni-stripe/stripe-checkout-embedded-themed"
  }
});

const lineItems = [
  {
    price_data: {
      unit_amount: 1500,
      currency: 'gbp',
      product_data: {
        name: 'Pro Plan - First Month',
      },
    },
    quantity: 1,
  }
]

export default async function handler(request, response) {
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: lineItems,
    mode: "payment",
    return_url: `https://${process.env.VERCEL_URL}/return.html?session_id={CHECKOUT_SESSION_ID}`,
  });

  // res.send({ clientSecret: session.client_secret });
  return response.json({ clientSecret: session.client_secret })
};

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  // apiVersion: '2020-08-27',
  // appInfo: { // For sample support and debugging, not required for production:
  //   name: "stripe-samples/accept-a-payment/payment-element",
  //   version: "0.0.2",
  //   url: "https://github.com/stripe-samples"
  // }
});

const lineItems = [
  {
    price_data: {
      unit_amount: 2099,
      currency: 'gbp',
      product_data: {
        name: 'Meeting Room Booking',
      },
    },
    quantity: 1,
  },
  {
    price_data: {
      unit_amount: 1099,
      currency: 'gbp',
      product_data: {
        name: 'Desk Booking',
      },
    },
    quantity: 1,
  },
]

exports.handler = async () => {
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: lineItems,
    mode: "payment",
    return_url: `${process.env.URL}/return.html?session_id={CHECKOUT_SESSION_ID}`,
  });

  // res.send({ clientSecret: session.client_secret });

  return {
    statusCode: 200,
    body: JSON.stringify({ clientSecret: session.client_secret }),
  };
};

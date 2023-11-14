const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
    // apiVersion: '2020-08-27',
    appInfo: {
      name: "stripe-checkout-embedded-themed",
      url: "https://github.com/gverni-stripe/stripe-checkout-embedded-themed"
    }
  });

exports.handler = async (request, context) => {
  const session = await stripe.checkout.sessions.retrieve(
    request.queryStringParameters.session_id
  );

  // res.send({
  //     status: session.status,
  //     customer_email: session.customer_details.email
  //   });

  return {
    statusCode: 200,
    body: JSON.stringify({
      status: session.status,
      customer_email: session.customer_details.email,
    }),
  };
};

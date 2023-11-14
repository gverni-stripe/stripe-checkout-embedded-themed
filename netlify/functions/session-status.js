const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
    // apiVersion: '2020-08-27',
    // appInfo: { // For sample support and debugging, not required for production:
    //   name: "stripe-samples/accept-a-payment/payment-element",
    //   version: "0.0.2",
    //   url: "https://github.com/stripe-samples"
    // }
  });

exports.handler = async (request, context) => {
  const session = await stripe.checkout.sessions.retrieve(
    req.queryStringParameters.session_id
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

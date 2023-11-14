// This is your test publishable API key.
const stripe = Stripe("pk_test_51NuYerBTCE7lqmZCArl8FZiTvRxOEpqIiXQyLkeeBuOIuQ66DgmmeqQ2qvp6fwMTQBkRu7xK0P7STzZjv7fknuWX00fxsvPCqr");

initialize();

// Create a Checkout Session as soon as the page loads
async function initialize() {
  const response = await fetch("/create-checkout-session", {
    method: "POST",
  });

  const { clientSecret } = await response.json();

  const checkout = await stripe.initEmbeddedCheckout({
    clientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}
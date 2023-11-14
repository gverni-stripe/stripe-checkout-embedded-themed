// Create a Checkout Session as soon as the page loads

document.addEventListener("DOMContentLoaded", async () => {
  async function initialize() {
    const response = await fetch(
      "/.netlify/functions/create-checkout-session",
      {
        method: "POST",
      }
    );

    const { clientSecret } = await response.json();

    const checkout = await stripe.initEmbeddedCheckout({
      clientSecret,
    });

    // Mount Embedded Checkout
    checkout.mount("#checkout");
  }

  const { publishableKey } = await fetch("/.netlify/functions/config").then(
    (r) => r.json()
  );
  if (!publishableKey) {
    alert("Please set your Stripe publishable API key in the .env file");
  }

  const stripe = Stripe(publishableKey, {
    apiVersion: "2020-08-27",
  });

  initialize();
});

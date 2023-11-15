

document.addEventListener("DOMContentLoaded", async () => {
  const { publishableKey } = await fetch("/.netlify/functions/config").then(
    (r) => r.json()
  );
  if (!publishableKey) {
    alert("Please set your Stripe publishable API key in the .env file");
  }

  stripe = Stripe(publishableKey, {
    apiVersion: "2020-08-27",
  });

  document.getElementById("get-started").onclick = async function () {
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

    // Hide Pricing Header & Pricing
    document.getElementByClassName("pricing-header").style.display = "none";
    document.getElementByClassName("pricing-plans").style.display = "none";

    // Mount Embedded Checkout
    checkout.mount("#checkout");
  };
});

[![Netlify Status](https://api.netlify.com/api/v1/badges/6bf46c6e-fe1f-4cd6-b8a3-5636768e0c26/deploy-status)](https://app.netlify.com/sites/stripe-checkout-embedded-quickstart/deploys)

# Stripe Accept a payment boilerplate for Netlify 

Demo available [here](https://stripe-checkout-embedded-quickstart.netlify.app/checkout.html)

This is a netlify deployment for the [Stripe Checkout Embedded form quiclstart](https://stripe.com/docs/checkout/embedded/quickstart)

To use this sample on Netlify from GitHub: 
* Clone the project into your GitHub profile
* Go on your Netlify console and click "Add a new site"
* Click "Deploy with GitHub"
* Select the repo you cloned
* Set the following Build settings:
  * Base Directory: leave empty
  * Build Command: leve empty
  * Publish directory: `public` (don't blame me for the name. I'm keeping it consistent with the sample app)
  * Functions directory: leave prefilled value (`netlify/functions`)
* Click on `Environment Variable` button and add the following environmental variable
  * `STRIPE_PUBLISHABLE_KEY`: your Stripe publishable key
  * `STRIPE_SECRET_KEY`: your stripe secret key
* Click Deploy button




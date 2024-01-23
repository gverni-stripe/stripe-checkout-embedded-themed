[![Netlify Status](https://api.netlify.com/api/v1/badges/1de6ca3d-44cd-4689-b7b4-c67a9f8cf936/deploy-status)](https://app.netlify.com/sites/stripe-checkout-embedded-themed/deploys)

# Stripe Checkout Embedded form PoC - Setup Mode (for Netlify)

![image](https://github.com/gverni-stripe/stripe-checkout-embedded-themed/assets/95485729/e765936f-74ee-4987-9f41-538df864f0ef)


Demo available [here](https://checkout-setup-mode--stripe-checkout-embedded-themed.netlify.app/checkout.html)

To use this sample on Netlify from GitHub: 
* Clone the project into your GitHub profile
* Go on your Netlify console and click "Add a new site"
* Click "Deploy with GitHub"
* Select the repo you cloned
* Set the following Build settings:
  * Base Directory: leave empty
  * Build Command: leve empty
  * Publish directory: `public` 
  * Functions directory: leave prefilled value (`netlify/functions`)
* Click on `Environment Variable` button and add the following environmental variable
  * `STRIPE_PUBLISHABLE_KEY`: your Stripe publishable key
  * `STRIPE_SECRET_KEY`: your stripe secret key
* Click Deploy button


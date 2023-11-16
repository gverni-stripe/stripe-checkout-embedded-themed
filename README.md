
# Stripe Checkout Embedded form PoC (for Vercel)

Demo available [here](https://stripe-checkout-embedded-themed.netlify.app/)

To use this sample on Vercel from GitHub: 
* Clone the project into your GitHub profile
* Go on your Vercel console and click "Add a new site"
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




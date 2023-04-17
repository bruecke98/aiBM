import { Stripe } from 'stripe';
// initialize Stripe with your API key
const stripe = new Stripe(process.env.STRIPE_PK, {
  apiVersion: '2022-11-15',
});

export const checkIfActiveSubscriber = async (supabaseUserEmail) => {
  // get the Stripe customer ID from Supabase using the user's email
  const customer = await stripe.customers.list({ email: supabaseUserEmail });

  if (!customer) {
    // if the user doesn't have a Stripe customer ID, they're not a subscriber
    return false;
  }

  // get the Stripe subscription associated with the customer ID
  const subscription = await stripe.subscriptions.retrieve(customer.data[0].id) 

  // check if the subscription is active
  return subscription.status === 'active';
};

import Stripe from 'stripe';

export default async function getSubscriptionStatus() {
  const user = useSupabaseUser();
  const config = useRuntimeConfig()
    const stripe = new Stripe(config.private.stripePK, {
        apiVersion: '2022-11-15',
    });

  const customer = await stripe.customers.list({ email: user.value.email });
  try {
    // Retrieve the customer's subscriptions
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.data[0].id, // replace with the customer ID you want to check
      status: 'active', // retrieve only active subscriptions
      limit: 1, // retrieve only the latest subscription
    });
    console.log(subscriptions.data[0].status);
    if (subscriptions.data[0].status === "active") {
      // The customer has no active subscriptions
      return true;
    }else{
        return false;
    }

    } catch (err) {
        console.log(err);
    }
}

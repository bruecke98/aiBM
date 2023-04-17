// // server/api/stripe/utils.js
// import Stripe from 'stripe';

// export default async function getSubscriptionStatus() {
//   const user = useSupabaseUser();
//   const config = useRuntimeConfig()
//   console.log(config.private.stripePK)
//     const stripe = new Stripe(config.private.stripePK, {
//         apiVersion: '2022-11-15',
//     });

//   const customer = await stripe.customers.list({ email: user.value.email });
//   try {
//     // Retrieve the customer's subscriptions
//     const subscriptions = await stripe.subscriptions.list({
//       customer: customer.data[0].id, // replace with the customer ID you want to check
//       status: 'active', // retrieve only active subscriptions
//       limit: 1, // retrieve only the latest subscription
//     });
//     console.log(subscriptions.data[0].status);
//     if (subscriptions.data[0].status === "active") {
//       // The customer has no active subscriptions
//       return true;
//     }else{
//         return false;
//     }

//     } catch (err) {
//         console.log(err);
//     }
// }

// // // server/api/stripe/utils.js
// // import Stripe from 'stripe';

// // export default async function getSubscriptionStatus() {
// //   const user = useSupabaseUser();
// //   let stripe;
// //   if(process.env.STRIPE_PK !== undefined){
// //     stripe = new Stripe(process.env.STRIPE_PK, {
// //       apiVersion: '2022-11-15',
// //     });
// //   }

// //   const customer = await stripe.customers.list({
// //     email: user.value.email,
// //   });

// //   const subscriptions = await stripe.subscriptions.list({
// //     customer: customer.data[0].id,
// //     status: 'active',
// //     limit: 1,
// //   });

// //   if (subscriptions.data.length > 0) {
// //     return subscriptions.data[0].status === 'active';
// //   }

// //   return false;
// // }


import Stripe from 'stripe';

const config = useRuntimeConfig()
const stripe = new Stripe(config.private.stripePK, {
  apiVersion: '2022-11-15',
});

export default async function getSubscriptionStatus(email : string) {
  console.log("UTILS", email)
  const customer = await stripe.customers.list({ email: email, limit: 1 });
  if (customer.data.length === 0) {
    return null; // customer not found
  }
  const subscription = customer.data[0].subscriptions?.data?.[0] ? await stripe.subscriptions.retrieve(customer.data[0].subscriptions.data[0].id) : null;

  if (subscription) {
    return subscription.status;
    // subscription not found
  }
  return null;
}


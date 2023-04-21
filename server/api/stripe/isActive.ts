import Stripe from 'stripe';

const config = useRuntimeConfig()
const stripe = new Stripe(config.private.stripePK, {
    apiVersion: '2022-11-15',
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const customers = await stripe.customers.list({ email: body.mail });
    if (customers.data.length === 0) {
        return {
            status: 200,
            body: {
                isActive: false,
            },
        };
    }else{
        const subscriptions = await stripe.subscriptions.list({
            customer: customers.data[0].id, // replace with the customer ID you want to check
            status: 'active', // retrieve only active subscriptions
            limit: 1, // retrieve only the latest subscription
        });
        if (subscriptions.data[0].status === "active") {
            return {
                status: 200,
                body: {
                    isActive: true,
                },
            };
        } else {
            return {
                status: 200,
                body: {
                    isActive: false,
                },
            };
        }
    }

});


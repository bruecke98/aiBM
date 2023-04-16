import Stripe from 'stripe';

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log('body', body)
    const config = useRuntimeConfig()
    const stripe = new Stripe(config.private.stripePK, {
        apiVersion: '2022-11-15',
    });

    const customer = await stripe.customers.list({ email: body.customerMail });

    if (customer.data.length > 0) {
    const customerId = customer.data[0].id;
    console.log('Customer ID:', customerId);
    } else {
    console.log('Customer not found');
    }

    const session = await stripe.checkout.sessions.create({
        // THIS LINE, HERE:
        mode: 'subscription',
        // price_1MxFaKFHj02KA3j1qFETbu35
        line_items: [
            {price: 'price_1MxFaKFHj02KA3j1qFETbu35', quantity: 1},
          ],  
        // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
        success_url: `${process.env.APP_DOMAIN}/success`,
        cancel_url: `${process.env.APP_DOMAIN}/canceled`,
        customer_email: body.customerMail
    });
    if (session.url){
        return sendRedirect(event, session.url , 302)
    }
});
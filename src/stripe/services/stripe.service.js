const { STRIPE_CONFIG } = require('../../../app.config');

const STRIPE_CONFIG = {
    SECRET_KEY: process.env.SECRET_KEY,
    CURRENCY: process.env.CURRENCY,
    SUCCESS_URL: process.env.SUCCESS_URL,
    CANCEL_URL: process.env.CANCEL_URL
}

const stripe = require('stripe')(STRIPE_CONFIG.SECRET_KEY);

const createCheckoutSession = async (req, res) => {

    const lineItems = req.priceId.map(item => {
        return { price: item, quantity: 1 };
    });
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: STRIPE_CONFIG.SUCCESS_URL,
        cancel_url: STRIPE_CONFIG.CANCEL_URL
    });

    res({ id: session.id });
};

const getLineItems = async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.sessionId);
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
    res({ customerName: session.customer_details.name, customerEmail: session.customer_details.email, total: session.amount_total, paymentStatus: session.payment_status, paymentIntent: session.payment_intent, lineItems: lineItems });
};

module.exports = {
    createCheckoutSession,
    getLineItems
};
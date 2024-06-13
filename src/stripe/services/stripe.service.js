const { STRIPE_CONFIG } = require('../../../app.config');

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

    res.json(session);
};

module.exports = {
    createCheckoutSession,
    getLineItems
};
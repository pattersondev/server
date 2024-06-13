const { STRIPE_CONFIG } = require('../../../app.config');

const stripe = require('stripe')(STRIPE_CONFIG.SECRET_KEY);

const createCheckoutSession = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{ price: req.priceId, quantity: 1 }],
        mode: 'payment',
        success_url: STRIPE_CONFIG.SUCCESS_URL,
        cancel_url: STRIPE_CONFIG.CANCEL_URL
    });

    res({ id: session.id });
};

module.exports = {
    createCheckoutSession
};
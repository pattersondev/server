const stripeContoller = require('../stripe.controller');

const express = require('express');
const router = express.Router();

router.post('/create-checkout-session', stripeContoller.createCheckoutSession);

router.get('/get-line-items/:sessionId', stripeContoller.getLineItems);

module.exports = router;
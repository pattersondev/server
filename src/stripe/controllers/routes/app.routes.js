const stripeContoller = require('../stripe.controller');

const express = require('express');
const router = express.Router();

router.post('/create-checkout-session', stripeContoller.createCheckoutSession);

module.exports = router;
const express = require('express');
const productRoutes = require('./src/product/routes');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Origin', 'Access-Control-Allow-Headers'],
}

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/v1/products', productRoutes);

app.use('/api', require('./src/stripe/controllers/routes/app.routes'));

app.listen(3000, () => {
    console.log(`DB server running!`);
});



app.listen(process.env.STRIPE_PORT || 3500, () => {
    console.log(`Stripe server running!`);
});
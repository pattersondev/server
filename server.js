const express = require('express');
const productRoutes = require('./src/product/routes');
const cors = require('cors');

const app = express();
// const stripePort = 3000;
// const dbPort = 3500;

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

// app.use('/api', require('./src/stripe/controllers/routes/app.routes'));

app.listen(process.env.PORT || 3000, () => {
    console.log(`DB server running!`);
});



// app.listen(process.env.PORT || 5000, () => {
//     console.log(`Stripe server running!`);
// });
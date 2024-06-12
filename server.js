const express = require('express');
const productRoutes = require('./src/product/routes');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/v1/products', productRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
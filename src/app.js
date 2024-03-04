const express = require('express');
const products = require('../routes/products');

const app = express();

app.use(express.json());

const PORT = 3302;

app.use('/products', products);

app.listen(PORT, () => {
	console.log('SERVIDOR RODANDO NA PORTA', PORT);
})

localhost:8080/products

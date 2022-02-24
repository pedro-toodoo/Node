'use strict';

const express = require('express');
const bodyParser = require('body-parser'); //converte para JSON
const mongoose = require('mongoose');


const app = express();
const router = express.Router();

//conecta com o BD
mongoose.connect('mongodb+srv://pedro:pedro@cluster0.bhqta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//carrega models
const Product = require('./models/product')
const Customer = require('./models/customer')
const Order = require('./models/order')

//carrega rotas
const indexRoute = require('./routes/index-routes')
const productRoute = require('./routes/product-routes')
const customerRoute = require('./routes/customer-routes')
const orderRoute = require('./routes/order-routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;
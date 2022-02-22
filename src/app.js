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

//carrega rotas
const indexRoute = require('./routes/index-routes')
const productRoute = require('./routes/product-routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;
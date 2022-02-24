'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true //remove espaços antes e depois da string 
    },
    email: {
        type: String,
        required: true,
        trim: true //remove espaços antes e depois da string 
    },
    password: {
        type: String,
        required: true,
        trim: true //remove espaços antes e depois da string 
    }
});

module.exports = mongoose.model('Customer', schema);
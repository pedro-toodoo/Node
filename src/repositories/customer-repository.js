'use strict';

const mongoose = require('mongoose');
const Custumer = mongoose.model('Customer');

exports.create = async (data) => {
    var custumer = new Custumer(data);
    await custumer.save()
}


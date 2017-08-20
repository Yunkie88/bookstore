var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookSchema = new Schema({
title: String,
author: String,
year: Number,
pages: Number,
createdAt : {type: Date, default: Date.now}
});


module.exports = mongoose.model('Book', BookSchema);
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongo = require ('./bookapi.js');

app.use('/api',mongo);

app.listen (8080);

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin123@ds153732.mlab.com:53732/bookstore')

module.exports = app; 
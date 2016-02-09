var Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/yes-we-canban');
var db = Mongoose.connection;

module.exports = db;
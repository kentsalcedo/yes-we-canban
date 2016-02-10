var Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/tasksDataBase');
var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function(){
  console.log("connected");
});

module.exports = db;
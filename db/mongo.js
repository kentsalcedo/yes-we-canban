var Mongoose = require('mongoose');
var http = require('http');

var mongolabURL = 'mongodb://' + process.env.MONGOLAB_USERNAME + ':' + process.env.MONGOLAB_PW + '@ds011168.mongolab.com:11168/tasks_database';

var uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
    'mongodb://localhost/tasksDataBase';
    // mongolabURL;


Mongoose.connect(uristring,function(err,res){
  if (err) {
    console.log('ERROR ', err, uristring);
  }
  else {
    console.log('ERROR ', err, uristring);
  }
});

var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function(){
  console.log("connected");
});

module.exports = db;
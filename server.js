
var express    = require('express');
var app        = express();
var PORT       = process.env.PORT || 3001;
var db         = require('./db/mongo');
var bodyParser = require('body-parser');
var Mongoose   = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));

var tasksSchema = Mongoose.Schema ({
  title     : String,
  desc      : String,
  priority  : String,
  createdBy : String,
  assignedTo: String,
  status    : String
});

var todos = Mongoose.model('todos', tasksSchema);

app.use(express.static('./public'));

app.get('/api', function (req, res) {
  // var taskObject = todos.findOne();
  // console.log("consoleLogging", taskObject);
  todos.find(function (err, data) {
    if (err) return console.error(err);
    res.json(data);
  });
});

app.post('/api/add', function (req, res) {

  return new todos({
    title     : req.body.title,
    desc      : req.body.desc,
    priority  : req.body.priority,
    createdBy : req.body.createdBy,
    assignedTo: req.body.assignedTo,
    status    : req.body.status
  }).save();
});

app.put('/api/update', function (req, res) {
  return todos.findOneAndUpdate({ _id : req.body._id },
    { $set : res }, { new: true }, function(){
      console.log("updated");
    });
});

app.delete('/api/delete', function (req, res) {
  console.log("consoleLogging server", req.body);
  return new todos({
    title     : req.body.title,
    desc      : req.body.desc,
    priority  : req.body.priority,
    createdBy : req.body.createdBy,
    assignedTo: req.body.assignedTo
    // status    : "__status__toDo__"
  }).save();
});

app.put('/api/update', function (req, res) {
  // console.log("consoleLogging", req.body._id);
  return todos.findOneAndUpdate({ _id : req.body._id },
    { $set : { desc : req.body.desc } }, { new: true }, function(){
      console.log("updated");
    });
});

app.delete('/api/delete', function (req, res) {
  return todos.find({ _id: req.body._id}).remove().exec();
});

app.get('*', function (req,res) {
  res.sendFile('/public/index.html', { root : __dirname });
});


var server = app.listen(PORT, function(){
  console.log("listen on port " + PORT);
});
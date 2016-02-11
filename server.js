
var express    = require('express');
var app        = express();
var PORT       = process.env.PORT || 3001;
var db         = require('./db/mongo');
var bodyParser = require('body-parser');
var Mongoose   = require('mongoose');

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
    status    : "__status__toDo__"
  }).save()
    .then(function (data) {
      return res.json( data );
    });
});

app.delete('/api/delete/:id', function (req, res) {
  todos.find({ _id: req.params.id}).remove().exec()
  .then(function (data) {
    console.log('HELLLLLLLL',data);
    return res.json( data );
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.put('/api/update', function (req, res) {
  return todos.findOneAndUpdate({ _id : req.body._id },
    { $set : res }, { new: true }, function(){
      console.log("updated");
    });
});

app.put('/api/update', function (req, res) {
  // console.log("consoleLogging", req.body._id);
  return todos.findOneAndUpdate({ _id : req.body._id },
    { $set : { status : req.body.status } }, { new: true }, function(){
      console.log(req.body.status);
    });
});


app.get('*', function (req,res) {
  res.sendFile('/public/index.html', { root : __dirname });
});


var server = app.listen(PORT, function(){
  console.log("listen on port " + PORT);
});
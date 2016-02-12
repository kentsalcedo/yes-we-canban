
var express    = require('express');
var app        = express();
var PORT       = process.env.PORT || 3001;
var db         = require('./db/mongo');
var bodyParser = require('body-parser');
var Mongoose   = require('mongoose');
var bcrypt     = require('bcrypt');

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
  new todos({
    title     : req.body.title,
    desc      : req.body.desc,
    priority  : req.body.priority,
    createdBy : req.body.createdBy,
    assignedTo: req.body.assignedTo,
    status    : "__status__toDo__"
  }).save();
    // .then(function (data) {
      // console.log('redirect');
      return res.send('/');
    // });
});

app.delete('/api/delete/:id', function (req, res) {
  todos.find({ _id: req.params.id}).remove().exec()
  .then(function (data) {
    return res.json( data );
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.put('/api/update', function(req, res) {
  console.log('server',req.body);
  todos.update(
    { _id : req.body._id },
    { $set : req.body },
    // { $set : { status : '__status__inProg__'}},
    { upsert : true },
    function(err, data){
      if(err) console.error(err);
      console.log('server data upsert',data);
      return res.json(data);
    });
  // .then(function (data) {
  //   return res.json( data );
  // })
  // .catch(function (err) {
  //   console.error(err);
  // });

});

app.get('*', function (req,res) {
  res.sendFile('/public/index.html', { root : __dirname });
});

//============ register user ===================

var usersSchema = Mongoose.Schema ({
  username  : String,
  password  : String
});

var users = Mongoose.model('users', usersSchema);

app.post('/api/register', function (req, res) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);

  new users({
    username : req.body.username,
    password : hash
  }).save();
    return res.send('/login');
});





var server = app.listen(PORT, function(){
  console.log("listen on port " + PORT);
});
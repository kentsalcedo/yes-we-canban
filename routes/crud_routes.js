
var express    = require('express');
var app        = express();
var db         = require('../db/mongo');
var users      = require('../db/Users');
var todos      = require('../db/tasks');

var auth = function(req, res, next){ if (!req.isAuthenticated()) res.send(401); else next(); };

app.get('/api', auth, function (req, res) {
  todos.find(function (err, data) {
    if (err) return console.error(err);
    res.json(data);
  });
});

app.post('/api/add', auth, function (req, res) {

  new todos({
    title     : req.body.title,
    desc      : req.body.desc,
    priority  : req.body.priority,
    createdBy : req.user,
    assignedTo: req.body.assignedTo,
    status    : "__status__toDo__"
  }).save();
    return res.send('/');
});

app.delete('/api/delete/:id', auth, function (req, res) {
  todos.find({ _id: req.params.id}).remove().exec()
  .then(function (data) {
    return res.json( data );
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.put('/api/update', auth, function(req, res) {
  todos.update(
    { _id : req.body._id },
    { $set : req.body },
    { upsert : true },
    function(err, data){
      if(err) console.error(err);
      return res.json(data);
    });
});

module.exports = app;
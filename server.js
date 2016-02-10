"use strict";

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
// const Mongoose = require('./db/mongo');
const Mongoose = require('./db/task.json');


app.use(express.static('./public'));

app.get('/api', function (req, res) {
  res.json(Mongoose);
  console.log("consoleLogging222", Mongoose);
});

// app.post('/api/add', function (req, res) {
//   // console.log("consoleLogging", req.title);
//   res.json(Mongoose);
// });

// app.put('/api/id/tasks', function (req, res) {
//   // console.log("consoleLogging", req.title);
//   res.json(Mongoose);
// });

// app.delete('/api/id/tasks', function (req, res) {
//   // console.log("consoleLogging", req.title);
//   res.json(Mongoose);
// });

app.get('*', function(req,res) {
 res.sendFile('/public/index.html', { root : __dirname });
});


var server = app.listen(PORT, function(){
  console.log("listen on port " + PORT);
});
"use strict";

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));

var movies = [
  {
    title : 'Star Wars IV',
    year : 1977
  },
  {
    title : 'Star Wars V',
    year : 1980
  },
  {
    title : 'Star Wars VI',
    year : 1983
  }
];

app.get('/api/movies', function(req,res){
  res.json(movies);
});

app.get('*', function(req,res) {
 res.sendFile('/public/index.html', { root : __dirname });
});

var server = app.listen(PORT, function(){
// app.listen(PORT, function(){
  // these are back ticks, back ticks say there is string interpolation in this statement
  process.stdout.write(`server listening on port ${PORT}`);
});
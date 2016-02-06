"use strict";

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));

var server = app.listen(PORT, function(){
// app.listen(PORT, function(){
  // these are back ticks, back ticks say there is string interpolation in this statement
  process.stdout.write(`server listening on port ${PORT}`);
});
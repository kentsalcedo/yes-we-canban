"use strict";

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));


app.get('*', function(req,res) {
 res.sendFile('/public/index.html', { root : __dirname });
});

var server = app.listen(PORT, function(){
  console.log("listen on port " + PORT);
});
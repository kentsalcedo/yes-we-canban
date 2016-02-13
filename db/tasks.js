
var db       = require('./mongo');
var Mongoose = require('mongoose');
var Schema   = Mongoose.Schema;
var users    = require('./Users');

var tasksSchema = Schema ({
  title     : String,
  desc      : String,
  priority  : String,
  createdBy : Schema.Types.Mixed,
  assignedTo: String,
  status    : String
});

var todos = Mongoose.model('todos', tasksSchema);

function _add (req) {

  return new TasksModel({
    title     : req.title,
    desc      : req.desc,
    priority  : req.priority,
    createdBy : req.createdBy,
    assignedTo: req.assignedTo,
    status    : req.status
  }).save();
}

module.exports = todos;
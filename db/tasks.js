module.exports = (function () {
  var db       = require('./mongo');
  var Mongoose = require('mongoose');
  var Schema   = Mongoose.Schema;

  var tasksSchema = Schema ({
    title     : String,
    desc      : String,
    priority  : String,
    createdBy : String,
    assignedTo: String,
    status    : String
  });

  var TasksModel = Mongoose.model('Task', tasksSchema);

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

  return {
    all         : _all,
    getToDoTasks: _add,
    getById     : _getById,
    editById    : _editById,
    deleteById  : _deleteById
  };
})();
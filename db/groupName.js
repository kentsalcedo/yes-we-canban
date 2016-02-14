var db       = require('./mongo');
var Mongoose = require('mongoose');
var Schema   = Mongoose.Schema;
var users    = require('./Users');

var groupNameSchema = Schema ({
  title     : String
});

var groupName = Mongoose.model('groupName', groupNameSchema);

module.exports = groupName;
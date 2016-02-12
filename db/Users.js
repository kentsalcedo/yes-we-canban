var Mongoose = require('mongoose');

var User = Mongoose.Schema ({
  firstName : String,
  lastName  : String,
  email     : String,
  username  : {type: String, unique: true},
  password  : {type: String}
});

var users = Mongoose.model('users', User);

module.exports = users;
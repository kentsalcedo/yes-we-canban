
var express    = require('express');
var app        = express();
var PORT       = process.env.PORT || 3001;
var db         = require('./db/mongo');
var bodyParser = require('body-parser');
var Mongoose   = require('mongoose');
var bcrypt     = require('bcrypt');
var passport   = require('passport');
var plm        = require('passport-local-mongoose');
var LocalStrategy  = require( 'passport-local' ).Strategy;
var users      = require('./db/Users');
var todos      = require('./db/tasks');
// var sConfig = require('./config/express-session-config.json');

var session    = require('express-session');

app.use(bodyParser.json());
app.use(express.static('./public'));

app.use(session({
  "secret" : secret,
  "saveUninitialized" : true,
  "resave" : true
}));
// app.use(session(sConfig));


app.use(passport.initialize());

app.use(passport.session());

passport.serializeUser(function (user, done){
  return done(null, user);
});

passport.deserializeUser(function (user, done){
  return done(null, user);
});

var auth = function(req, res, next){ if (!req.isAuthenticated()) res.send(401); else next(); };

app.get('/api', auth, function (req, res) {
  todos.find(function (err, data) {
    if (err) return console.error(err);
    res.json(data);
  });
});

app.post('/api/add', auth, function (req, res) {

  new todos({
    group     : req.body.group,
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

//============ register user ===================

app.get('/api/users', auth, function (req, res) {
  users.find(function (err, data) {
    if (err) return console.error(err);
    res.json(data);
  });
});

app.post('/api/register', function (req, res) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);

  new users({
    firstName: req.body.firstName,
    lastName : req.body.lastName,
    email    : req.body.email,
    username : req.body.username,
    password : hash
  }).save();
    return res.send('/');
});

//============= logging in ======================


passport.use(new LocalStrategy({
  passReqToCallback: true
  },
  function(req, username, password, done){
    var user;
    users.findOne({
      username : username
    })
    .then(function(data){
      user = data;
      if(!user){
        return done(null, false);
      }
      bcrypt.compare(password, user.password, function(err, res){
        if(user.username === username && res === false){
          return done(null, false);
        }
        if(user.username === username && res === true){
          return done(null, user);
        }
      });
    });
  }
));

app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {

    if (err) {
      return next('error');
    }
    if (!user) {
      return res.sendStatus(401);
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.sendStatus(200);
    });
  })(req, res, next);
});

app.get('/logout', function(req,res){
  req.logout();
  res.json({ "logout" : true });
});

app.get('*', function (req,res) {
  res.sendFile('/public/index.html', { root : __dirname });
});

var server = app.listen(PORT, function(){
  console.log("listen on port " + PORT);
});

module.exports = app;
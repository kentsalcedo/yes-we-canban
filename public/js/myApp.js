// this defines module since it is taking 2 arguments
angular.module('myApp', []); // external dependencies go inside the []

//
var myApp = angular.module('myApp');

myApp
.config(function() {
  // config
}).run(function(){
  // initialize
});
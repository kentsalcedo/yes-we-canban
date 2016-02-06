// this defines module since it is taking 2 arguments
// external dependencies go inside the []
angular.module('myApp', []);

var myApp = angular.module('myApp');

myApp
.config(function() {
  // config
}).run(function(){
  // initialize
});

// basic controller, inside the function arguements, you put dependencies
// first arguement is the name of the controller and function
// $ is an angular created code
// $scope adds scope dependency

// you can put multiple dependencies
// per angular docs, pass an array instead of a function

myApp.controller('myController', ['$scope', function($scope){
  $scope.myFirstName = "Kent";
}]);
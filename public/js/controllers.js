// basic controller, inside the function arguements, you put dependencies
// first arguement is the name of the controller and function
// $ is an angular created code
// $scope adds scope dependency

// you can put multiple dependencies
// per angular docs, pass an array instead of a function

angular.module('myApp')
.controller('myController', ['$scope', function($scope){
  $scope.myFirstName = "Kent";
  $scope.myModel = "Ready Player One";
}]);
angular.module('myApp')
.controller('OtherController', ['$scope', 'mainCharacter', 'characterVersionFactory',
  function($scope, mainCharacter, characterVersionFactory, TaskService, Movies){
  $scope.myFirstName = "Kent";
  $scope.myModel = "Ready Player One";
  $scope.mainCharacter = mainCharacter;
  $scope.characterVersionFactory = characterVersionFactory;

}]);
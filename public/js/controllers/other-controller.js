angular.module('myApp')
.controller('OtherController', ['$scope', 'mainCharacter', 'characterVersionFactory',
  function($scope, mainCharacter, characterVersionFactory, BookService, Movies){
  $scope.myFirstName = "Kent";
  $scope.myModel = "Ready Player One";
  $scope.mainCharacter = mainCharacter;
  $scope.characterVersionFactory = characterVersionFactory;

}]);
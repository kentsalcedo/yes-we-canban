
// "use strict"
// basic controller, inside the function arguements, you put dependencies
// first arguement is the name of the controller and function
// $ is an angular created code
// $scope adds scope dependency

// you can put multiple dependencies
// per angular docs, pass an array instead of a function

// angular.module('myApp')
// .controller('myController', ['$scope', 'mainCharacter', 'characterVersionFactory', 'BookService', 'Movies',
//   function($scope, mainCharacter, characterVersionFactory, BookService, Movies){
//   $scope.myFirstName = "Kent";
//   $scope.myModel = "Ready Player One";
//   $scope.mainCharacter = mainCharacter;
//   $scope.characterVersionFactory = characterVersionFactory;
//   $scope.BookService = BookService;

//   // providers
//   $scope.movies = []; // initialize as an empty array because this is an async call
//   Movies.getMovies().success(function(moviesFromAjaxResult){
//     $scope.movies = moviesFromAjaxResult;
//   });
// }]);
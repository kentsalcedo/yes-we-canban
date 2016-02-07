"use strict"

angular.module('myApp')
.controller('MoviesController', ['$scope', 'Movies',
  function($scope, Movies){
  // providers
  $scope.movies = []; // initialize as an empty array because this is an async call
  Movies.getMovies().success(function(moviesFromAjaxResult){
    $scope.movies = moviesFromAjaxResult;
  });
}]);
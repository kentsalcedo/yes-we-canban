"use strict"

angular.module('myApp')
.controller('TaskController', ['$scope','TaskService',
  function ($scope, TaskService, MoveTask) {
    $scope.TaskService = TaskService;

    $scope.MoveTask = function (task) {
      task.status += 1;
      // console.log("task", task.title);
  };
}]);
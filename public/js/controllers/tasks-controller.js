"use strict"

angular.module('myApp')
.controller('TaskController', ['$scope','TaskService',
  function ($scope, TaskService, MoveTask) {
    $scope.TaskService = TaskService;

    $scope.MoveTaskInProgress = function (task) {
      task.status = '__status__inProg__';
    };

    $scope.MoveTaskDone = function (task) {
      task.status = '__status__done__';
    };

    $scope.MoveTaskOut = function (task) {
      task.status = '__status__out__';
    };

}]);
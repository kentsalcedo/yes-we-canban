"use strict"

angular.module('myApp')
.controller('TaskController', ['$http','$scope','TaskService',
  function ($http, $scope, TaskService, MoveTask) {
    $scope.TaskService = TaskService;

    $scope.tasksArray = [];

    TaskService.allTasks()
      .success(function (data) {
        $scope.tasksArray = data;
      });

    $scope.MoveTaskInProgress = function (task) {
      console.log("consoleLogging", task);
      // task.status = '__status__inProg__';
    };

    $scope.MoveTaskDone = function (task) {
      task.status = '__status__done__';
    };

    $scope.MoveTaskOut = function (task) {
      task.status = '__status__out__';
    };

    // $http.get('todo/all').success( function (data) {
    //   console.log("consoleLogging");
    //   // $scope.allTasks = data;
    // });

}]);
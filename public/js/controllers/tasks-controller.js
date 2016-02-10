// "use strict"

angular.module('myApp')
.controller('TaskController', ['$http','$scope','TaskService',
  function ($http, $scope, TaskService, MoveTask) {
    $scope.TaskService = TaskService;

    $scope.addTask = function(newTask){
      console.log("consoleLogging controller", $scope.new_task);
      TaskService.addTask($scope.new_task);
    };

    $scope.tasksArray = [];

    TaskService.allTasks()
      .success(function (data) {
        $scope.tasksArray = data;
      });

    $scope.MoveTaskInProgress = function (data) {
      data.status = '__status__inProg__';
    };

    $scope.MoveTaskDone = function (task) {
      task.status = '__status__done__';
    };

    $scope.MoveTaskOut = function (task) {
      task.status = '__status__out__';
    };
}]);
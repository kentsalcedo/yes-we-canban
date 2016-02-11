// "use strict"

angular.module('myApp')
.controller('TaskController', ['$window','$http','$scope','TaskService',
  function ($window, $http, $scope, TaskService, MoveTask) {
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

    $scope.deleteTask = function (taskId) {
      console.log("TASK ID task controller", taskId);
      TaskService.deleteTask(taskId)
      .success(function(data){
        window.location.replace('/');
      });
    };

    //will pass data to service
    $scope.MoveTaskInProgress = function (newStatus, id) {
      TaskService.updateTask(newStatus, id);
    };

    $scope.MoveTaskDone = function (task) {
      task.status = '__status__done__';
    };

    $scope.MoveTaskOut = function (task) {
      task.status = '__status__out__';
    };
}]);
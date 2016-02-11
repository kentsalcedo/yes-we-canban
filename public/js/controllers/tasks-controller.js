// "use strict"

angular.module('myApp')
.controller('TaskController', ['$location','$http','$scope','TaskService',
  function ($location, $http, $scope, TaskService, MoveTask) {
    $scope.TaskService = TaskService;

    $scope.tasksArray = [];

    $scope.addTask = function (newTask) {
      TaskService.addTask($scope.new_task)
        .success(function (data) {
          TaskService.allTasks().success(function (allTasks) {
            $scope.tasksArray = allTasks;
            $location.path('/');
          });
        })
        .catch(function (err) {
          console.error(err);
        });
    };


    TaskService.allTasks()
      .success(function (data) {
        $scope.tasksArray = data;
      });

    $scope.deleteTask = function (taskId) {
      TaskService.deleteTask(taskId)
      .success(function (data) {
        TaskService.allTasks().success(function (allTasks) {
          $scope.tasksArray = allTasks;
          $location.path('/');
        });
      })
      .catch(function() {
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
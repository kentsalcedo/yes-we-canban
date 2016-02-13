// "use strict"

angular.module('myApp')
.controller('TaskController', ['$location','$http','$scope','TaskService',
  function ($location, $http, $scope, TaskService, MoveTask) {
    $scope.TaskService = TaskService;

    $scope.tasksArray = [];

    TaskService.allTasks()
      .success(function (data) {
        $scope.tasksArray = data;
      });

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

    $scope.deleteTask = function (taskId) {
      TaskService.deleteTask(taskId)
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

    $scope.updateTask = function(task) {
      TaskService.updateTask(task)
        .then(function(response) {
            $scope.tasks = response.data;
        }, function(err) {
      });
    };

    //will pass data to service
    $scope.MoveTaskToDo = function (task) {
      task.status = '__status__toDo__';
      TaskService.updateTask(task)
        .success(function(data) {
        TaskService.allTasks().success(function (allTasks) {
          $scope.tasksArray = allTasks;
          $location.path('/');
        });
      })
      .catch(function (err) {
        console.error(err);
      });
    };

    $scope.MoveTaskInProgress = function (task) {
      task.status = '__status__inProg__';
      TaskService.updateTask(task)
        .success(function(data) {
        TaskService.allTasks().success(function (allTasks) {
          $scope.tasksArray = allTasks;
          $location.path('/');
        });
      })
      .catch(function (err) {
        console.error(err);
      });
    };

    $scope.MoveTaskDone = function (task) {
      task.status = '__status__done__';
      TaskService.updateTask(task)
        .success(function(data) {
        TaskService.allTasks().success(function (allTasks) {
          $scope.tasksArray = allTasks;
          $location.path('/');
        });
      })
      .catch(function (err) {
        console.error(err);
      });
    };

    $scope.MoveTaskOut = function (task) {
      task.status = '__status__clear__';
      TaskService.updateTask(task)
        .success(function(data) {
        TaskService.allTasks().success(function (allTasks) {
          $scope.tasksArray = allTasks;
          $location.path('/');
        });
      })
      .catch(function (err) {
        console.error(err);
      });
    };

}]);
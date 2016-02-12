angular.module('myApp')
  .controller('UserController', ['$location', '$http', '$scope', 'TaskService', function ($location, $http, $scope, TaskService) {

    $scope.TaskService = TaskService;

    $scope.newUserArray = [];

    $scope.addNewUser = function (newUser) {
      console.log("consoleLogging", $scope.newUser);
      TaskService.addNewUser($scope.newUser)
        .success(function (data) {
          $location.path('/');
        })
        .catch(function (err) {
          console.error(err);
        });
    };

  }]);
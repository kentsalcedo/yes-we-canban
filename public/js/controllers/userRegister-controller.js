angular.module('myApp')
  .controller('UserController', ['$location', '$http', '$scope', 'TaskService', function ($location, $http, $scope, TaskService) {

    $scope.TaskService = TaskService;

    $scope.newUserArray = [];

    $scope.addNewUser = function (newUser) {
      TaskService.addNewUser($scope.newUser)
        .success(function () {
          $location.path('/login');
        })
        .catch(function (err) {
          console.error(err);
        });
    };

  }]);
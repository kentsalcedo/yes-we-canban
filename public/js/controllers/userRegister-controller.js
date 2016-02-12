angular.module('myApp')
  .controller('UserController', ['$location', '$http', '$scope', 'TaskService', function ($location, $http, $scope, TaskService) {

    $scope.TaskService = TaskService;

    $scope.newUserArray = [];

    $scope.addNewUser = function (newUser) {
      TaskService.addNewUser($scope.newUser)
        .success(function (data) {
          $location.path('/');
        })
        .catch(function (err) {
          console.error(err);
        });
    };

    $scope.userLogin = function (username) {
      console.log("userRegister-controller.js", username);
      TaskService.userLogin($scope.username)
      .success(function (data) {
        $location.path('/');
      })
      .catch(function (err) {
        console.error(err);
      });
    };

  }]);
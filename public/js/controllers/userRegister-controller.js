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

    $scope.userLogin = function (user) {
      console.log("userRegister-controller.js", user);
      TaskService.userLogin(user)
      .success(function (data) {
        $location.path('/');
      })
      .catch(function (err) {
        console.error(err);
      });
    };

    $scope.userLogout = function () {
      console.log('controller: logout');
      TaskService.userLogout()
        .success(function (data) {
          $location.path('/login');
        })
        .catch(function (err) {
          console.error(err);
        });
    };

  }]);
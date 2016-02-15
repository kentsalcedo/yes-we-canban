angular.module('myApp')
  .controller('UserController', ['$window','$route','$rootScope', '$location', '$http', '$scope', 'TaskService', function ($window, $route, $rootScope, $location, $http, $scope, TaskService) {

    $scope.TaskService = TaskService;

    $scope.newUserArray = [];

    // $rootScope.currentUserName = "";

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
      TaskService.userLogin(user)
      .success(function (data) {
        $location.path('/');

      })
      .catch(function (err) {
        console.error(err);
      });
      $window.location.reload();
    };

    $scope.userLogout = function () {
      TaskService.userLogout()
        .success(function (data) {
          $location.path('/');
        })
        .catch(function (err) {
          console.error(err);
        });
    };

  }]);
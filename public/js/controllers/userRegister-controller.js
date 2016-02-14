angular.module('myApp')
  .controller('UserController', ['$rootScope', '$location', '$http', '$scope', 'TaskService', function ($rootScope, $location, $http, $scope, TaskService) {

    $scope.TaskService = TaskService;

    $scope.newUserArray = [];

    $rootScope.currentUserName = "";

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
        console.log(data);
        $location.path('/');
      })
      .catch(function (err) {
        console.error(err);
      });
      $rootScope.currentUserName = "kent";
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
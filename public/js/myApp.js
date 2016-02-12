// this defines module since it is taking 2 arguments
// external dependencies go inside the []
angular.module('myApp', ['ngRoute', 'ngAnimate','xeditable']);

var myApp = angular.module('myApp');

myApp
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider
    .when('/', {
      templateUrl : 'views/default.html',
      controller : 'TaskController'
    })
    .when('/tasks', {
      templateUrl  : 'views/tasks.html',
      controller : 'TaskController'
    })
    .when('/api/add', {
      templateUrl : '/views/default.html',
      controller : 'TaskController'
    })
    .when('/login', {
      templateUrl : 'views/login.html'
      // controller : 'UserController'
    })
    .when('/register', {
      templateUrl : 'views/register.html',
      controller : 'UserController'
    })
    .otherwise({
      templateUrl  : 'views/404.html',
    });

}])
.run(function (editableOptions) {
  editableOptions.theme = 'bs3';
});
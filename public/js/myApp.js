// this defines module since it is taking 2 arguments
// external dependencies go inside the []
angular.module('myApp', ['ngRoute', 'ngAnimate']);

var myApp = angular.module('myApp');

myApp
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider
    .when('/',{
      templateUrl : 'views/default.html',
      controller : 'TaskController'
    })
    .when('/tasks', {
      templateUrl  : 'views/tasks.html',
      controller : 'TaskController'
    })
    .otherwise({
      templateUrl  : 'views/404.html',
    });

}])
.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION){
  // initialize
  // root scope is like global scope
  $rootScope.APP_VERSION = APP_VERSION;
}]);


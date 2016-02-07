// this defines module since it is taking 2 arguments
// external dependencies go inside the []
angular.module('myApp', []);

var myApp = angular.module('myApp');

myApp
.config(['MoviesProvider', function(MoviesProvider) {
  MoviesProvider.setEndPoint('http://localhost:3001/api/movies');
}])
.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION){
  // initialize
  // root scope is like global scope
  $rootScope.APP_VERSION = APP_VERSION;
}]);


angular.module('myApp')
  .service('TaskService', [ '$http', function ($http) {

    this.allTasks = function () {
      return $http.get('/api');
    };
  } // end of this function

]);
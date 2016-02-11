angular.module('myApp')
  .service('TaskService', [ '$http', function ($http) {

    this.allTasks = function () {
      return $http.get('/api');
    };

    this.addTask = function (newTask) {
      return $http.post('/api/add', newTask);
    };

    this.updateTask = function (data) {
      return $http.put('/api/update', data);
    };

    this.deleteTask = function (taskId) {
      return $http.delete('/api/delete/' + taskId );
    };
  } // end of this function

]);
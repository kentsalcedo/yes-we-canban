angular.module('myApp')
  .service('TaskService', [ '$http', function ($http) {

    this.allTasks = function () {
      return $http.get('/api');
    };

    this.addTask = function (newTask) {
      console.log("consoleLogging service", newTask);
      var data = {
        json : JSON.stringify(newTask)
      };

      return $http.post('/api/add', data);
    };

    this.updateTask = function () {
      return $http.put('/api/update');
    };

    this.deleteTask = function () {
      return $http.delete('/api/delete');
    };
  } // end of this function

]);
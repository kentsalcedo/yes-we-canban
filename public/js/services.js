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

    this.addNewUser = function (newUser) {
      return $http.post('/api/register', newUser);
    };

    this.userLogin = function (username) {
      return $http.post('/login', username);
    };

    this.userLogout = function () {
      console.log('services: logout');
      return $http.get('/logout');
    };

    this.allUsers = function (username) {
      return $http.post('/api/users', username);
    };

  } // end of this function

]);
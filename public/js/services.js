angular.module('myApp')
  .service('TaskService', [ '$http', function ($http) {
    this.allTasks = function () {
      return $http.get('/api');
    };

    // this.getToDoTasks = function (req) {
    //   return this.toDo;
    // };

    // this.getToDoTask = function (id){
    //   return this.toDo.filter(function (task) { // returns array of tasks
    //     return task.id === id; // boolean
    //   })
    //   .reduce(function (_,task) { // _ means you don't care about the first arg
    //     return task;
    //   });
    // };

    // this.addToDoTask = function (req) {
    //   console.log("consoleLogging", req);
    //   var nextId = this.toDo.length + 1;
    //   req.id = nextId;
    //   this.toDo.push({
    //     id : 1,
    //     title : req.title,
    //     desc : req.desc,
    //     priority : req.priority,
    //     createdBy : req.createdBy,
    //     assignedTo : req.assignedTo,
    //     status : '__status__toDo__'
    //   });
    // };

  } // end of this function

]);
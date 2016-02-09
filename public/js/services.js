
(function(){
// "use strict"

  function TaskService(){
    this.toDo = [
      // {
      //   id : 1,
      //   title : 'get er to do',
      //   desc : 'hello, hell yaaa mudddaaaaa',
      //   priority : 'supa low',
      //   createdBy : 'manang Riz',
      //   assignedTo : 'Boyette-Boy',
      //   status : 1
      // }
    ];

    this.getToDoTasks = function(){
      return this.toDo;
    };

    //moves tasks from to-do to in progress column
    this.moveToInProgress = function () {
      console.log("consoleLogging", this);
    };


    this.getToDoTask = function (id){
      return this.toDo.filter(function (task) { // returns array of tasks
        return task.id === id; // boolean
      })
      .reduce(function (_,task) { // _ means you don't care about the first arg
        return task;
      });
    };

    this.addToDoTask = function (task){
      var nextId = this.toDo.length + 1;
      task.id = nextId;
      this.toDo.push({
        // id : 1,
        title : task.title,
        desc : task.desc,
        priority : task.priority,
        createdBy : task.createdBy,
        assignedTo : task.assignedTo,
        status : '__status__toDo__'
      });
    };
  } // end of this function

  angular.module('myApp')
    .service('TaskService', TaskService);

})();
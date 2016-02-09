
(function(){
// "use strict"

  function TaskService(){
    this.tasks = [
      {
        id : 1,
        title : 'get er done',
        desc : 'hello, hell yaaa mudddaaaaa',
        priority : 'supa low',
        createdBy : 'manang Riz',
        assignedTo : 'Boyette-Boy'
      }
    ];

    this.getTasks = function(){
      return this.tasks;
    };

    this.getTask = function(id){
      return this.tasks.filter(function(task){ // returns array of tasks
        return task.id === id; // boolean
      })
      .reduce(function(_,task){ // _ means you don't care about the first arg
        return task;
      });
    };

    this.addTask = function(task){
      var nextId = this.tasks.length + 1;
      task.id = nextId;
      this.tasks.push({
        // id : 1,
        title : task.title,
        desc : task.desc,
        priority : task.priority,
        createdBy : task.createdBy,
        assignedTo : task.assignedTo
      });
    };

  } // end of this function

  angular.module('myApp')
    .service('TaskService', TaskService);

})();
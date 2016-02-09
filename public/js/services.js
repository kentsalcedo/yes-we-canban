
(function(){
// "use strict"

  function TaskService(){
    this.tasks = [
      {
        id : 1,
        title : 'get er done',
        author : 'Kent'
      },
      {
        id : 2,
        title : 'Ray Laughing',
        author : 'Kento Bento'
      },
      {
        id : 3,
        title : 'Outliers',
        author : 'Malcom Gladwell'
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
        id : nextId,
        title : task.title,
        author : task.author
      });
    };

  } // end of this function

  angular.module('myApp')
    .service('TaskService', TaskService);

})();
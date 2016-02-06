
(function(){
// "use strict"

  function BookService(){
    var books = [
      {
        id : 1,
        title : 'Chaz Crying',
        author : 'Chaz Lum'
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

    this.getBooks = function(){
      return books;
    };

    this.getBook = function(id){
      return books.filter(function(book){ // returns array of books
        return book.id === id; // boolean
      })
      .reduce(function(_,book){ // _ means you don't care about the first arg
        return book;
      });
    };

  }

  angular.module('myApp')
    .service('BookService', BookService);

})();

  // angular.modules('myApp')
  //   .service('BookService', BookService);

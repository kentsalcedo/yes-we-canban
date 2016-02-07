
(function(){
// "use strict"

  function BookService(){
    this.books = [
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
      return this.books;
    };

    this.getBook = function(id){
      return this.books.filter(function(book){ // returns array of books
        return book.id === id; // boolean
      })
      .reduce(function(_,book){ // _ means you don't care about the first arg
        return book;
      });
    };

    this.addBook = function(book){
      var nextId = this.books.length + 1;
      book.id = nextId;
      this.books.push({
        id : nextId,
        title : book.title,
        author : book.author
      });
    };

  } // end of this function

  angular.module('myApp')
    .service('BookService', BookService);

})();
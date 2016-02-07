angular.module('myApp')
  .provider('Movies',function () {
    // these methods are avaiable in the config
    this.endpoint = '';
    this.setEndPoint = function(endpoint){
      this.endpoint = endpoint;
    };
    // providers have a special method
    this.$get = ['$http', function($http){
      var endpoint = this.endpoint;
      // there is a factory in here that is being returned
      return {
        getMovies : function(){
          return $http.get(endpoint);
        }
      };

    }];

  });
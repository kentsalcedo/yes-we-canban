angular.module('myApp')
  .factory('characterVersionFactory',
    ['mainCharacter', 'APP_VERSION',
    function(mainCharacter, APP_VERSION){
      return mainCharacter + " " + APP_VERSION;
  }]);
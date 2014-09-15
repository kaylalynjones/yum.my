(function(){
  'use strict';

  angular.module('yum.my')
  .factory('Bookmark', ['$http', function($http){

    function createCat(category){
      return $http.post('/bookmarks', category);
    }
    function all(){
      return $http.get('/bookmarks');
    }

    return {createCat:createCat, all:all};
  }]);
})();

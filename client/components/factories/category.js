(function(){
  'use strict';

  angular.module('yum.my')
  .factory('Category', ['$http', function($http){

    function create(category){
      return $http.post('/bookmarks/categories', {category:category});
    }
    function all(){
      return $http.get('/bookmarks');
    }

    return {create:create, all:all};
  }]);
})();
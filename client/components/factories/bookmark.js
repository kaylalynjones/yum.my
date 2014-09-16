(function(){
  'use strict';

  angular.module('yum.my')
  .factory('Bookmark', ['$http', function($http){

    function create(bookmark){
      return $http.post('/bookmarks/add', bookmark);
    }

    return {create:create};
  }]);
})();

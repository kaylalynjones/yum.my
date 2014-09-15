(function(){
  'use strict';

  angular.module('yum.my')
  .controller('BookmarksCtrl', ['$scope', 'Bookmark', function($scope, Bookmark){
    $scope.categories = [];

    $scope.addCategory = function(){
      Bookmark.createCat($scope.category).then(function(response){
        $scope.categories.push(response.data.category);
        $scope.category = '';
      });
    };
    Bookmark.all().then(function(response){
      $scope.categories = response.data.categories;
    });

  }]);
})();

(function(){
  'use strict';

  angular.module('yum.my')
  .controller('BookmarksCtrl', ['$scope', '$routeParams', 'Category', 'Bookmark', function($scope, $routeParams, Category, Bookmark){
    $scope.categories = [];
    $scope.bookmark = {};
    $scope.bookmarks =[];

    $scope.categoryId = $routeParams.categoryId;

    $scope.addCategory = function(){
      Category.create($scope.category).then(function(response){
        $scope.categories.push(response.data.category);
        $scope.category = {};
      });
    };
    Category.all().then(function(response){
      $scope.categories = response.data.categories;
      $scope.bookmarks = response.data.bookmarks;
    });

    $scope.addBookmark = function(){
      Bookmark.create($scope.bookmark).then(function(response){
        $scope.bookmarks.push(response.data.bookmark);
        $scope.bookmark = {};
      });
    };
  }]);
})();

(function(){
  'use strict';

  angular.module('yum.my')
  .controller('LoginCtrl', ['$scope', '$location',  'User', function($scope, $location, User){
    $scope.user = {};

    function success(response){
      toastr.success('Welcome Back!');
      $location.path('/');
    }
    function failure(response){
      toastr.error('Your all thumbs today. Let\'s try that again.');
      $scope.user = {};
    }

    $scope.login = function(){
      User.login($scope.user).then(success, failure);
    };
  }]);

})();

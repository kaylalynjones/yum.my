(function(){
  'use strict';

  angular.module('yum.my')
  .controller('RegisterCtrl', ['$scope', 'User', function($scope, User){
    $scope.user = {};
    $scope.register = function(){
      function success(response){
        toastr.success('You did it! You are Registered!');
      }
      function failure(response){
        toastr.error('Eh.. Sorry dude, no go. Let\'s try that again.');
      }
      User.register($scope.user).then(success, failure);
      $scope.user = {};
    };
  }]);

})();

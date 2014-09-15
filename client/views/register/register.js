(function(){
  'use strict';

  angular.module('yum.my')
  .controller('RegisterCtrl', ['$scope', '$location',  'User', function($scope, $location, User){
    $scope.user = {};
    $scope.register = function(){
      function success(response){
        toastr.success('You did it! You are Registered!');
        $location.path('/login');
      }
      function failure(response){
        toastr.error('Eh.. Sorry dude, no go. Let\'s try that again.');
        $scope.user = {};
      }
      User.register($scope.user).then(success, failure);
    };
  }]);

})();

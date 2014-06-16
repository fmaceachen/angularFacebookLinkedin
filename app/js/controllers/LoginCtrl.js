'use strict';

myApp.controller('LoginCtrl', ['$scope', 'FacebookAuthSrv', 'LinkedInAuthSrv',
  function ($scope, FacebookAuthSrv, LinkedInAuthSrv) {

  $scope.checkLoginState = function () {
    FacebookAuthSrv.checkLoginState();
    LinkedInAuthSrv.checkLoginState();
  }

  $scope.checkLoginState();

}]);

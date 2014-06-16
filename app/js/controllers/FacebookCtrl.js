'use strict';

myApp.controller('FacebookCtrl', ['$scope', 'FacebookAuthSrv', function($scope, FacebookAuthSrv) {

  $scope.login = function () {
    FacebookAuthSrv.login();
  };

  $scope.logout = function () {
    FacebookAuthSrv.logout();
  };

  $scope.getUser = function () {
    return FacebookAuthSrv.user;
  };

  $scope.checkLoginState = function () {
    FacebookAuthSrv.checkLoginState();
  }

}]);

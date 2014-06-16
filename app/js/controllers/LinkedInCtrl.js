'use strict';

myApp.controller('LinkedInCtrl', ['$scope', 'LinkedInAuthSrv', function ($scope, LinkedInAuthSrv) {

  $scope.login = function () {
    LinkedInAuthSrv.login();
  };

  $scope.logout = function () {
    LinkedInAuthSrv.logout();
  };

  $scope.getUser = function () {
    return LinkedInAuthSrv.user;
  };

}]);

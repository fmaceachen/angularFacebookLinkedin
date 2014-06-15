'use strict';

myApp.controller('LinkedInCtrl', ['$scope', 'LinkedInAuthSrv', function ($scope, LinkedInAuthSrv) {

  $scope.login = function () {
    IN.User.authorize(function () {
      IN.API.Profile("me").result(function (profile) {
        console.log('Profile: ' + profile);
      })
    }, this);
  };

  $scope.logout = function () {
    IN.User.logout(function (response) {
      console.log(response);
    }, this);
  };

}]);

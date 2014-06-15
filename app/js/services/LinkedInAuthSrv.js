'use strict';


myApp.factory('LinkedInAuthSrv', ['$rootScope', 'ezfb', function($rootScope, ezfb) {
  var LinkedInAuthSrv = Object.create(BaseAuthSrv);
  LinkedInAuthSrv.login = function () {
    alert('Awesome');
  };
  return LinkedInAuthSrv;
}]);

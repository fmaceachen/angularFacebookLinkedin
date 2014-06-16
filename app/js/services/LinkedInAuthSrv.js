'use strict';


myApp.factory('LinkedInAuthSrv', ['$rootScope', function($rootScope) {

  var LinkedInAuthSrv = Object.create(BaseAuthSrv);

  LinkedInAuthSrv.checkLoginState = function () {
    var _this = this;
    var auth = IN.User.isAuthorized();
    if(auth) {
      this.getUserInfo({});
    }
  };

  LinkedInAuthSrv.getUserInfo = function(authResponse) {
    var _this = this;
    IN.API.Profile("me").result(function (response) {
      $rootScope.user = _this.user = response;
    })
  };

  LinkedInAuthSrv.login = function () {
    IN.User.authorize(function (response) {
      console.log('Linkedin: ' + response);
      this.getUserInfo(response);
    }, this);
  };

  LinkedInAuthSrv.logout = function() {
    IN.User.logout(function (response) {
      $rootScope.user = this.user = null;
    }, this);
  };

  return LinkedInAuthSrv;
}]);

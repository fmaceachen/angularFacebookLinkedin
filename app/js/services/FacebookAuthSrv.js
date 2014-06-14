'use strict';

myApp.factory('FacebookAuthSrv', ['$rootScope', function($rootScope) {

  var user;

  var checkLoginState = function () {
    var _this = this;
    FB.getLoginStatus(function(response) {
      _this.appLogin(response);
    });
  };

  var getUserInfo = function() {
    var _this = this;
    FB.api('/me', function(response) {
      $rootScope.$apply(function() {
        $rootScope.user = _this.user = response;
      });
    });
  };

  var appLogin = function (response) {
    if (response.status === 'connected') {
      console.log('Welcome!  Fetching your information.... ');
      this.getUserInfo();
    } else {
      //user hit cancel button
      console.log('User cancelled login or did not fully authorize.');
    }
  };

  var login  = function (){
    var _this = this;
    FB.login(function(response) {
      _this.appLogin(response);
    },{
      scope: 'public_profile, email'
    });
  };

  var logout = function() {
    var _this = this;

    FB.logout(function(response) {
      $rootScope.$apply(function() {
        $rootScope.user = _this.user = null;
      });
    });

  };

  return {
    getUserInfo: getUserInfo,
    appLogin: appLogin,
    login:login,
    logout: logout,
    checkLoginState: checkLoginState,
    user: user
  }

}]);

'use strict';

myApp.factory('FacebookAuthSrv', ['$rootScope', 'ezfb', function($rootScope, ezfb) {

  var checkLoginState = function () {
    var _this = this;
    ezfb.getLoginStatus().then(function(response) {
      _this.appLogin(response);
    });
  };

  var getUserInfo = function() {
    var _this = this;
    ezfb.api('/me').then(function(response) {
        $rootScope.user = _this.user = response;
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
    ezfb.login(null,{
      scope: 'public_profile, email'
    }).then(function(response) {
      _this.appLogin(response);
    });
  };

  var logout = function() {
    var _this = this;

    ezfb.logout().then(function(response) {
        $rootScope.user = _this.user = null;
    });

  };

  return {
    getUserInfo: getUserInfo,
    appLogin: appLogin,
    login:login,
    logout: logout,
    checkLoginState: checkLoginState
  }

}]);

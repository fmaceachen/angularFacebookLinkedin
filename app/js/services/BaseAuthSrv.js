'use strict';

var BaseAuthSrv = (function () {
  var user = {};

  var checkLoginState = function () {};

  var getUserInfo = function() {};

  var appLogin = function () {};

  var login  = function (){};

  var logout = function() {};

  return {
    getUserInfo: getUserInfo,
    appLogin: appLogin,
    login:login,
    logout: logout,
    checkLoginState: checkLoginState,
    user: user
  }
}());

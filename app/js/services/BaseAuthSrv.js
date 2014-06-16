'use strict';

var BaseAuthSrv = (function () {
  var user = {
    email: '',
    firstName: '',
    gender: '',
    id: '',
    lastName: '',
    name: '',
    provider: '',
    accessToken: '',
    expiresIn: '',
    loggedIn: false
  };

  var checkLoginState = function () {};

  var login  = function (){};

  var logout = function() {};

  var saveToken = function () {
     //TODO We try to log in into our server.
    console.log('Saving access token');
  };

  return {
    login:login,
    logout: logout,
    checkLoginState: checkLoginState,
    saveToken: saveToken,
    user: user
  }
}());

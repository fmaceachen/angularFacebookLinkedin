'use strict';

myApp.factory('FacebookAuthSrv', ['$rootScope', '$q', 'ezfb', function($rootScope, $q, ezfb) {

  var FacebookAuthSrv = Object.create(BaseAuthSrv);

  FacebookAuthSrv.checkLoginState = function () {
    var _this = this;
    ezfb.getLoginStatus().then(function(response) {
      if (response.status === 'connected') {
        _this.getUserInfo(response.authResponse);
      }
    });
  };

  FacebookAuthSrv.getUserInfo = function(authResponse) {
    var _this = this;
    ezfb.api('/me').then(function(response) {
      _this.parseUser(response, authResponse);
    });
  };

  FacebookAuthSrv.login  = function (){
    var _this = this;
    ezfb.login(null,{
      scope: 'public_profile, email'
    }).then(function(response) {
      if (response.status === 'connected') {
        _this.getUserInfo(response.authResponse);
      } else {
        //Cancel was hit
      }
    });
  };

  FacebookAuthSrv.logout = function() {
    var _this = this;
    ezfb.logout().then(function(response) {
        $rootScope.user = _this.user = null;
    });
  };

  FacebookAuthSrv.parseUser = function (response, authResponse) {
    this.user.email = response.email;
    this.user.firstName = response.first_name;
    this.user.gender = response.gender;
    this.user.id = response.id;
    this.user.lastName = response.last_name;
    this.user.name = response.name;
    this.user.accessToken = authResponse.accessToken;
    this.user.expiresIn = authResponse.expiresIn;
    this.user.provider = 'Facebook';
    this.user.isLoggedin = true;

    $rootScope.user = this.user;

    this.saveToken();
  };

  return FacebookAuthSrv;

}]);

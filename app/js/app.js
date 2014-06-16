'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ui.router',
  'ezfb'
]).
config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'ezfbProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider, ezfbProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html'
      });

    $urlRouterProvider.otherwise('/#');

    $locationProvider.hashPrefix('!');
    //$locationProvider.html5Mode(true);

    ezfbProvider.setInitParams({
      appId: '293369750840632',
      cookie: true,
      xfbml: false
    });
}]);

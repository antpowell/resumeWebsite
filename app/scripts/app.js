'use strict';

/**
 * @ngdoc overview
 * @name anthonyPowellcomApp
 * @description
 * # anthonyPowellcomApp
 *
 * Main module of the application.
 */
angular
  .module('anthonyPowellcomApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl',
        controllerAs: 'resume'
      })
      .when('#skills',{
        templateUrl: '#skills'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

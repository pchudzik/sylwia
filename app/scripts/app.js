'use strict';

angular
  .module('sylwia', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/portfolio/:project?', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        reloadOnSearch: false,
        activetab: 'portfolio'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        activetab: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        activetab: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

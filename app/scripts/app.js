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
        controller: 'MainCtrl',
        activetab: 'about'
      })
      .when('/portfolio/:project?', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        reloadOnSearch: false,
        activetab: 'portfolio'
      })
      .when('/offer', {
        templateUrl: 'views/offer.html',
        controller: 'OferCtrl',
        activetab: 'offer'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        activetab: 'contact'
      })
      .when('/eligibilities', {
        templateUrl: 'views/eligibilities.html',
        controller: 'EligibilitiesCtrl',
        activetab: 'eligibilities'
      })
      .when('/kitchens', {
        templateUrl: 'views/kitchen.html',
        controller: 'KitchenCtrl',
        activetab: 'kitchens'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc overview
 * @name angulargeneratorApp
 * @description
 * # angulargeneratorApp
 *
 * Main module of the application.
 */
angular
    .module('angulargeneratorApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/scopes', {
                templateUrl: 'views/scopes.html',
                controller: 'ScopesCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/crud', {
                templateUrl: 'views/crud.html',
                controller: 'CrudCtrl'
            })
            .when('/http', {
                templateUrl: 'views/http.html',
                controller: 'HttpCtrl'
            })
            .when('/nginclude', {
                templateUrl: 'views/include.html',
                controller: 'IncludeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
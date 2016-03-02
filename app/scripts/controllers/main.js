'use strict';

/**
 * @ngdoc function
 * @name angulargeneratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angulargeneratorApp
 */
angular.module('angulargeneratorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

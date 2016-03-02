'use strict';

/**
 * @ngdoc function
 * @name angulargeneratorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angulargeneratorApp
 */
angular.module('angulargeneratorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

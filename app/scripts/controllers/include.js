'use strict';

/**
 * @ngdoc function
 * @name angulargeneratorApp.controller:IncludeCtrl
 * @description
 * # IncludeCtrl
 * Controller of the angulargeneratorApp
 */
angular.module('angulargeneratorApp')
    .controller('IncludeCtrl', function($scope, $log) {
        $log.log('includeCtrl Empieza en cuanto se termina de cargar el html y están todas las dependencias');

        $scope.toggleComponent = function() {
            if ($scope.selectedComponent === 'componenthola') {
                $scope.selectedComponent = 'componenthola2';
            } else {
                $scope.selectedComponent = 'componenthola';
            }
        };

        $scope.selectedComponent = 'componenthola';

    });
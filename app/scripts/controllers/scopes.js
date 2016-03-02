'use strict';

/**
 * @ngdoc function
 * @name angulargeneratorApp.controller:ScopesCtrl
 * @description
 * # ScopesCtrl
 * Controller of the angulargeneratorApp
 */
angular.module('angulargeneratorApp')
    .controller('ScopesCtrl', function($scope, $log) {

        $scope.showPeople = function() {
            $log.log('showPeople');
            $log.log($scope.morePeople);
        };

        $scope.num = 2;

        var num = 3,
            num2 = 4;

        $scope.sum = num + num2;

        $scope.people = {
            name: 'Tom',
            age: 28
        };

        $scope.morePeople = [{
            name: 'Laura',
            age: 1
        }, {
            name: 'Diego',
            age: 1
        }];

    });
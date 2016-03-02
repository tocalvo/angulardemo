'use strict';

/**
 * @ngdoc function
 * @name angulargeneratorApp.controller:CrudCtrl
 * @description
 * # CrudCtrl
 * Controller of the angulargeneratorApp
 */
angular.module('angulargeneratorApp')
    .controller('CrudCtrl', function($scope) {
        $scope.addAnimal = function() {
            $scope.animals.push($scope.newAnimal);
        };
        $scope.removeAnimal = function(animal) {
            var index = $scope.animals.indexOf(animal);
            $scope.animals.splice(index, 1);
        };

        $scope.newAnimal = {
            name: '',
            age: 0,
            size: ''
        };

        $scope.animals = [{
            name: 'tortuga',
            age: 1,
            size: 'M'
        }, {
            name: 'caballo',
            age: 12,
            size: 'XL'
        }, {
            name: 'perro',
            age: 1,
            size: 'L'
        }, {
            name: 'gato',
            age: 13,
            size: 'M'
        }, {
            name: 'pez',
            age: 41,
            size: 'S'
        }, {
            name: 'flamenco',
            age: 51,
            size: 'L'
        }, {
            name: 'ardilla',
            age: 16,
            size: 'XS'
        }, {
            name: 'unicornio',
            age: 1000,
            size: 'XL'
        }];
    });
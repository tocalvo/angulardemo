'use strict';

/**
 * @ngdoc function
 * @name angulargeneratorApp.controller:HttpCtrl
 * @description
 * # HttpCtrl
 * Controller of the angulargeneratorApp
 */
angular.module('angulargeneratorApp')
    .controller('HttpCtrl', function($scope, $http, $log) {

        // $http.get('/someUrl', config).then(successCallback, errorCallback);
        // $http.post('/someUrl', data, config).then(successCallback, errorCallback);
        $http.get('http://jsonplaceholder.typicode.com/posts/1').then(function(response) {
            $log.log(response);

        }, function(error) {
            $log.error(error);
        });
    });
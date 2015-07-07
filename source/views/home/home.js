'use strict';

angular.module('sif')
.controller('HomeCtrl', function($scope, $state){
  console.log('nav loaded');
  $scope.letsGo = function() {
    $state.go('survey1');
  }
});
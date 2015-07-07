'use strict';

angular.module('sif')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
    
  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: '/views/home/home.html',
      controller: 'HomeCtrl'
    })
    .state('survey1',{
      url: '/survey1',
      templateUrl: '/views/survey1/survey1.html',
      controller: 'HomeCtrl'
    })    
});
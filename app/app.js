'use strict';

// Declare app level module which depends on views, and components
angular.module('showapp', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider
      .when('/', {
        templateUrl: 'components/movies/moviesView.html',
        controller: 'moviesController'
      })
      .when('/series', {
          templateUrl: 'components/series/seriesView.html',
          controller: 'seriesController'
      })
      .otherwise({
          redirectTo: '/'
      });
}]);

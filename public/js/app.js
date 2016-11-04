//public/js/app.js

angular.module('chatApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'MessageCtrl', 'MessageService']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

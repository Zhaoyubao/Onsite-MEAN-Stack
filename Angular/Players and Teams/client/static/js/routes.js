let app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
    .when('/players', {
        templateUrl: 'partials/players.html',
        controller: 'PlayersController'
    })
    .when('/teams', {
        templateUrl: 'partials/teams.html',
        controller: 'TeamsController'
    })
    .when('/team/:teamName',{
        templateUrl: 'partials/team.html',
        controller: 'TeamController'
    })
    .when('/associations', {
        templateUrl: 'partials/associations.html',
        controller: 'AssociationsController'
    })
    .otherwise('/')
})

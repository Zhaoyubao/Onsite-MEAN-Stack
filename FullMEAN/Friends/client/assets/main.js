console.log('Main config is loaded');

const app = angular.module('myApp', ['ngRoute']);

app.config( $routeProvider => {
    $routeProvider
    .when('/', {
        templateUrl: '_index.html',
        controller: 'indexController'
    })
    .when('/new', {
        templateUrl: '_new.html',
        controller: 'newController'
    })
    .when('/show/:id', {
      templateUrl: '_show.html',
      controller: 'showController'
    })
    .when('/edit/:id', {
        templateUrl: '_edit.html',
        controller: 'editController'
    })
    .otherwise('/')
})

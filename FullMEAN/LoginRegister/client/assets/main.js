console.log('Main config is loaded');

const app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config( ['$routeProvider', ($routeProvider) => {
    $routeProvider
        .when('/login', {
            templateUrl: '_login.html',
            controller: 'loginCtrl'
        })
        .when('/register', {
            templateUrl: '_register.html',
            controller: 'registerCtrl'
        })
        .when('/main', {
            templateUrl: '_main.html',
            controller: 'mainCtrl'
        })
        .when('/user', {
            templateUrl: '_user.html',
            controller: 'mainCtrl'
        })
        .otherwise('/login')
}])

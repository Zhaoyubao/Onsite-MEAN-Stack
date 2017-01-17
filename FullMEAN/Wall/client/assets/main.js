console.log('Main config is loaded');

const app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(['$routeProvider', ($routeProvider) => {
    $routeProvider
        .when('/logReg', {
            templateUrl: '_logReg.html',
            controller: 'logRegCtrl'
        })
        .when('/wall', {
            templateUrl: '_wall.html',
            controller: 'wallCtrl'
        })
        .otherwise('/logReg')
}])

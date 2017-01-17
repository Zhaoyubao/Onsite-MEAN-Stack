const app = angular.module('myApp', ['ngRoute']);

app.config( ($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: '_dashboard.html',
            controller: 'indexCtrl'
        })
        .when('/products', {
            templateUrl: '_products.html',
            controller: 'productCtrl'
        })
        .when('/orders', {
            templateUrl: '_orders.html',
            controller: 'orderCtrl'
        })
        .when('/customers', {
            templateUrl: '_customers.html',
            controller: 'customerCtrl'
        })
        .otherwise('/')
})

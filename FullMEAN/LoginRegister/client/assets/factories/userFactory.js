console.log('UserFactory loaded');

app.factory('userFactory', ['$http', function($http) {
    let factory = {};

    factory.getUser = function(id) {
        return $http.get(`/users/${id}`);
    }

    factory.getUsers = function() {
        return $http.get(`/users`);
    }

    factory.register = function(data, callback, errback) {
        $http.post('/register', data).then(callback, errback);
    }

    factory.login = function(data) {
        return $http.post('/login', data);
    }

    return factory;
}])

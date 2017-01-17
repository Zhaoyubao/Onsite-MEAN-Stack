console.log('WallFactory loaded');

app.factory('wallFactory', ['$http', function($http) {
    let factory = {};

    factory.logReg = function(user) {
        return $http.post('/logreg', user);
    }

    factory.getUser = function(user) {
        return $http.get(`/users/${user}`);
    }

    factory.postMsg = function(msg, user) {
        return $http.post(`/messages/${user}`, msg);
    }

    factory.postComment = function(comment, user, msgId) {
        return $http.post(`/comments/${user}/${msgId}`, comment);
    }

    factory.getMsgs = function() {
        return $http.get('/messages');
    }

    return factory;
}])

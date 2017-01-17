console.log('Friends Factory');

app.factory('friendsFactory', ['$http', function($http) {
    let factory = {};
    factory.createFriend = function(newFriend) {
        return $http.post('/friends', newFriend);
    }

    factory.getFriends = function() {
        return $http.get('/friends');
    }

    factory.getFriendById = function(id) {
        return $http.get(`/friends/${id}`);
    }

    factory.updateFriend = function(id, friend) {
        return $http.put(`/friends/${id}`, friend);
    }

    factory.delFriend = function(id) {
        return $http.delete(`/friends/${id}`);
    }

    return factory;
}])

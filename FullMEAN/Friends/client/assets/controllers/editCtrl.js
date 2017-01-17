console.log('Edit Controller');

app.controller('editController', ['$scope', '$routeParams', '$location', 'friendsFactory', function($scope, $routeParams, $location, FF) {
    let now = new Date(),
        year = now.getFullYear(),
        month = now.getMonth() + 1,
        day = now.getDate();
    $scope.today = `${year}-${month}-${day}`;

    let id = $routeParams.id;
    FF.getFriendById(id)
    .then( (response) => {
        $scope.friend = response.data;
        $scope.friend.dob = new Date($scope.friend.dob);
    })
    .catch( (error) => console.log('Error:', error) );

    $scope.updateFriend = function() {
        FF.updateFriend(id, $scope.friend)
        .then( (response) => {
            $location.url(`/show/${id}`);
        })
    }
}])

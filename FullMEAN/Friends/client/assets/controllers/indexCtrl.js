console.log('Index Controller');

app.controller('indexController', ['$scope', 'friendsFactory', function($scope, FF) {
    $scope.sortby = 'fname';
    $scope.reverse = false;

    function getFriends() {
        FF.getFriends()
        .then( (response) => {$scope.friends = response.data} )
        .catch( (error) => console.log('Error:', error) )
    }
    getFriends();

    $scope.delFriend = function(id) {
        if(!confirm("Confirm Delete!")) return false;
        else {
            FF.delFriend(id)
            .then( (response) => {
                console.log(response.data);
                getFriends();
            });
            // .then(getFriends)
        }
    }

    $scope.sortBy = function(field) {
       $scope.reverse = ($scope.sortby === field) ? !$scope.reverse : false;
       $scope.sortby = field;
   }
}])

console.log('Show Controller');

app.controller('showController', ['$scope', '$routeParams', 'friendsFactory', function($scope, $routeParams, FF) {
    FF.getFriendById($routeParams.id)
    .then( (response) => {$scope.friend = response.data} )
    .catch( (error) => console.log('Error:', error) )
}])

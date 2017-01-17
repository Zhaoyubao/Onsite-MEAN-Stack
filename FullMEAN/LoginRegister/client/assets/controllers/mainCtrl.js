console.log('MainCtrl loaded');

app.controller('mainCtrl', ['$scope', '$location', '$cookies', 'userFactory', function($scope, $location, $cookies, UF) {

    if(!$cookies.get('userId'))  $location.url('/login');

    UF.getUser($cookies.get('userId'))
        .then( (res) => $scope.user = res.data )
        .catch( (err) => console.log(`Error: ${err}`) )

    UF.getUsers()
        .then( (res) => $scope.users = res.data )
        .catch( (err) => console.log(`Error: ${err}`) )

    $scope.signOut = function() {
        $cookies.remove('userId');
        $location.url('/login');
    }
}])

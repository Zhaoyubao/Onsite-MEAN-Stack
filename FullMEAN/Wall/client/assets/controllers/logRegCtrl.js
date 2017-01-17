console.log('LoginCtrl loaded');

app.controller('logRegCtrl', ['$scope', '$location', '$cookies', 'wallFactory', function($scope, $location, $cookies, WF) {
    if($cookies.get('user'))  $location.url('/wall');

    $scope.logReg = function() {
        if ($scope.logRegForm.$valid) {
            WF.logReg({name: $scope.user.name.toLowerCase()})
                .then( (res) => {
                    $cookies.put('user', res.data.name);
                    $location.url('/wall');
                })
                .catch( (err) => console.log(`Error: ${err}`) )
        } else {
            console.log('Invalid Form');
        }
    }
}])

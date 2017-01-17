console.log('LoginCtrl loaded');

app.controller('loginCtrl', ['$scope', '$location', '$cookies', 'userFactory', function($scope, $location, $cookies, UF) {
    let now = new Date(),
        expireDate = new Date(now.setMinutes(now.getMinutes() + 60));
    $scope.pwErr = false;
    $scope.emailErr = false;
    $scope.logUser = {};

    if($cookies.get('userId')) {
        $location.url('/main');
    }
    $scope.login = function() {
        if ($scope.logForm.$valid) {
            UF.login($scope.logUser)
                .then( res => {
                    if(res.data.pwErr)  {
                        $scope.emailErr = false;
                        $scope.pwErr = true;
                    }
                    else if(res.data.emailErr) {
                        $scope.pwErr = false;
                        $scope.emailErr = true;
                    }
                    else {
                        $cookies.put('userId', res.data._id, {'expires': expireDate});
                        $location.url('/main');
                    }
                })
                .catch( (err) => console.log(`Error: ${err}`) )
        }
    }
}])

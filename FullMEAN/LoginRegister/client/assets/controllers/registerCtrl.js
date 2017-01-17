console.log('RegisterCtrl loaded');

app.controller('registerCtrl', ['$scope', '$location', '$cookies', 'userFactory', function($scope, $location, $cookies, UF) {
    let now = new Date(),
        year = now.getFullYear(),
        month = now.getMonth() + 1,
        day = now.getDate(),
        expireDate = new Date(now.setMinutes(now.getMinutes() + 60));
    $scope.today = `${year}-${month}-${day}`;
    $scope.minDate = `${year-100}-${month}-${day}`;
    $scope.regExp = {
        name: /^[a-zA-Z\s]*$/,
        email: /^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]+$/,
        pw: /^[A-Za-z\d@$!%*?&]*$/
    };
    $scope.regUser = {};
    $scope.regError = false;

    if($cookies.get('userId'))  $location.url('/main');

    $scope.register = function() {
        if($scope.regForm.$valid) {
            $scope.regError = false;
            UF.register($scope.regUser, (res) => {
                if(res.data.error) {
                    $scope.regErr = true;
                } else {
                    $cookies.put('userId', res.data._id, {'expires': expireDate});
                    $location.url('/main');
                }}, (err) => console.log(`Error: ${err}`)
            )
        }
    }
}])

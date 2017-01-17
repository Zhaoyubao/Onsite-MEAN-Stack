app.controller('PlayersController', ['$scope', 'playerFactory', '$location', function($scope, PF, $location) {
    $scope.players = PF.getPlayers();
    // $scope.players = PF.players;
    $scope.sortby = 'id';
    $scope.reverse = false;

    $scope.addPlayer = function() {
        if($scope.newPlayer && $scope.newPlayer.name.replace(/\s/g,'')) {
            PF.addPlayer($scope.newPlayer);
            $scope.newPlayer = {};
        }
        else alert("Please enter the name!");
        // $location.url('/associations');
    }

    $scope.removePlayer = function(id) {
        PF.removePlayer(id);
    }

    $scope.sortBy = function(field) {
        $scope.reverse = ($scope.sortby === field) ? !$scope.reverse : false;
        $scope.sortby = field;
    }
}])

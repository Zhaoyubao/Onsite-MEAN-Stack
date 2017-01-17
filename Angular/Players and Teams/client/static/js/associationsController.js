app.controller('AssociationsController', ['$scope', 'playerFactory', 'teamFactory', function($scope, PF, TF) {
    $scope.players = PF.getPlayers();
    $scope.teams = TF.getTeams();
    $scope.sortby = 'id';
    $scope.reverse= false;

    $scope.assignPlayer = function() {
        PF.associatePlayerTeam($scope.playerName, $scope.teamName);
        $scope.playerName = '';
        $scope.teamName = '';
    }

    $scope.clearAssignment = function(playerId) {
        PF.clearAssignment(playerId);
    }

    $scope.sortBy = function(field) {
        $scope.reverse = ($scope.sortby === field) ? !$scope.reverse : false;
        $scope.sortby = field;
    }
}])

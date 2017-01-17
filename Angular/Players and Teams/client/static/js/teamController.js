app.controller('TeamController', ['$scope', '$routeParams', 'playerFactory', 'teamFactory', function($scope, $routeParams, PF, TF) {
    let teamName = $routeParams.teamName;
    $scope.team = TF.getTeam(teamName);
    $scope.players = [];
    for(let player of PF.getPlayers()) {
        if(player.team === teamName)  $scope.players.push(player);
    }
}])

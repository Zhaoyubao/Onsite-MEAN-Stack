app.controller('TeamsController', ['$scope', 'playerFactory', 'teamFactory', function($scope, PF, TF){
    $scope.teams = TF.getTeams();
    $scope.sortby = 'id';
    $scope.reverse= false;

    $scope.addTeam = function(){
        if($scope.newTeam && $scope.newTeam.name.replace(/\s/g,'')) {
            TF.addTeam($scope.newTeam);
            $scope.newTeam = {};
        }
        else alert("Please enter the name!");
    }

    $scope.removeTeam = function(id) {
        let team = $scope.teams.find( team => team.id === id );
        TF.removeTeam(id);
        PF.removeTeamAssociation(team.name);
    }

    $scope.sortBy = function(field) {
        $scope.reverse = ($scope.sortby === field) ? !$scope.reverse : false;
        $scope.sortby = field;
    }
}])

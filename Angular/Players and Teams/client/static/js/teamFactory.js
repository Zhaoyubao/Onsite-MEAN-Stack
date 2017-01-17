app.factory('teamFactory', function() {
    let factory = {},
        teams   = [],
        teamId  = 0;
    factory.getTeam = function(teamName) {
        let idx = teams.findIndex( team => team.name === teamName );
        return teams[idx];
    }
    factory.getTeams = function() {
        return teams;
    }
    factory.addTeam = function(team) {
        team.id = ++teamId;
        teams.push(team);
    }
    factory.removeTeam = function(id) {
        let idx = teams.findIndex( team => team.id === id );
        teams.splice(idx, 1);
    }
    return factory;
})

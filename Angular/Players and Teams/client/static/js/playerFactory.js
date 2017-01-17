app.factory('playerFactory', function() {
    let factory = {},
        players = [],
        playerId = 0;
    // factory.players = [];
    factory.getPlayers = function() {
        return players;
    }
    factory.addPlayer = function(player) {
        player.id = ++playerId,
        player.team = '';
        players.push(player);
    }
    factory.removePlayer = function(id) {
        let idx = players.findIndex( player => player.id === id );
        players.splice(idx, 1);
    }
    factory.associatePlayerTeam = function(playerName, teamName) {
        for(let player of players) {
            if (player.name === playerName)  player.team = teamName;
        }
        // players.forEach( player => {
        //     if (player.name === playerName)  player.team = teamName;
        // })
    }
    factory.removeTeamAssociation = function(teamName) {
        for(let player of players) {
            if (player.team === teamName)  player.team = '';
        }
        // players.map( player => {
        //     if (player.team === teamName)  player.team = '';
        // })
    }
    factory.clearAssignment = function(id) {
        let idx = players.findIndex( player => player.id === id );
        players[idx].team = '';
    }
    return factory;
})

function getPlayerState(playerId, gameState){
    const allPlayers = gameState.players;
    let thisPlayerState;
    for(let player of allPlayers){
        if(Number(player.playerId) === Number(playerId)){
            thisPlayerState = player;
        }
    }
    return thisPlayerState;
}

module.exports = getPlayerState;
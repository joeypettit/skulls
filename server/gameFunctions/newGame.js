
// this function will create a game object based on the number of players
function newGame(numOfPlayers){

    let gameObj = {
        test: 'tested ok',
        numOfPlayers,
        hands: []
    };

    // each player will have a hand with four cards (isSkull? => false, false, false, true)
    for(let i = 0; i < numOfPlayers; i++){
        gameObj.hands.push([false, false, false, true]);
    }
    return gameObj;
}


module.exports = newGame;
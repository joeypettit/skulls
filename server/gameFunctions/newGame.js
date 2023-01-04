// this function will create a gameState object based on the number of players
function newGame() {
  const gameState = {
    gameId: 0,
    whosTurn: "Joey", //player name
    gameStage: "laying", // , laying, betting, flipping,
    latestBet: {
      numOfCards: null, // number of cards currently being bet
      highestBetter: null, // player with highest bet
    },
    players: [
      {
        name: "Joey",
        playerId: 1,
        fullHand: [{
            isSkull: true,
            isRevealed: false
        }, {
            isSkull: false,
            isRevealed: false
        },{
            isSkull: false,
            isRevealed: false
        },{
            isSkull: false,
            isRevealed: false
        }],
        cardsInHand: [],    // cards that are in the players hand as play progresses
        cardsInPlay: [],    // cards currently laid down and in play
        isBetting: false,   // is this player participating in this round of betting => true/false
        points: 0,          // number of points (rounds) this player has won
        isOwner: true       // if this player created the game, they are the owner
      },
      {
        name: "Kath",
        playerId: 2,
        fullHand: [{
            isSkull: false,
            isRevealed: false
        }, {
            isSkull: true,
            isRevealed: false
        },{
            isSkull: false,
            isRevealed: false
        },{
            isSkull: false,
            isRevealed: false
        }],
        cardsInHand: [],    // cards that are in the players hand as play progresses
        cardsInPlay: [],    // cards currently laid down and in play
        isBetting: false,   // is this player participating in this round of betting => true/false
        points: 0,          // number of points (rounds) this player has won
        isOwner: true       // if this player created the game, they are the owner
      },
      {
        name: "David",
        playerId: 3,
        fullHand: [{
            isSkull: false,
            isRevealed: false
        }, {
            isSkull: false,
            isRevealed: false
        },{
            isSkull: false,
            isRevealed: false
        },{
            isSkull: true,
            isRevealed: false
        }],
        cardsInHand: [],    // cards that are in the players hand as play progresses
        cardsInPlay: [],    // cards currently laid down and in play
        isBetting: false,   // is this player participating in this round of betting => true/false
        points: 0,          // number of points (rounds) this player has won
        isOwner: true       // if this player created the game, they are the owner
      },
    ],
  };

  // each player will have a hand with four cards (isSkull? => false, false, false, true)
//   for (let i = 0; i < numOfPlayers; i++) {
//     gameState.hands.push([false, false, false, true]);
//   }

  return gameState;
}

module.exports = newGame;

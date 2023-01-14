import React from "react";
import "./App.css";
import PlayerHand from "./Player/PlayerHand";
import GameBoard from "./Gameboard/GameBoard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        💀💀 & 🌹🌹
        <button>New Game</button>
        <button>New Round</button>
      </header>

      <div className="player-hands">
        <h1>Player Hands:</h1>
        <PlayerHand playerNum={1} />
        <PlayerHand playerNum={2} />
        <PlayerHand playerNum={3} />
      </div>

      <GameBoard />
    </div>
  );
}

export default App;

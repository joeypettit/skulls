import React, { useState } from "react";
import "./App.css";
import PlayerHand from "./Routes/PlayerHand";
import GameBoard from "./Routes/GameBoard";
import axios from "axios";

function App() {
  const [gameState, setGameState] = useState({});

  // this function will request a new game object from server and set it to state
  function newGame(numOfPlayers) {
    axios({
      method: "GET",
      url: `/api/game/new/`,
    })
      .then((response) => {
        console.log(response.data);
        setGameState(response.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <header className="App-header">
        💀💀 & 🌹🌹
        <button onClick={() => newGame()}>New Game</button>
      </header>
      <GameBoard gameState={gameState} />
    </div>
  );
}

export default App;

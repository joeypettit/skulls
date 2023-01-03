import React, { useState } from "react";
import "./App.css";
import PlayerHand from "./Routes/PlayerHand";
import Gameboard from "./Routes/GameBoard";
import axios from "axios";

function App() {
  const [gameObj, setGameObj] = useState();

  // this function will request a new game object from server and set it to state
  function newGame(numOfPlayers) {
    axios({
      method: "GET",
      url: `/api/game/new/${numOfPlayers}`,
    })
      .then((response) => {
        console.log(response.data);
        setGameObj(response.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <header className="App-header">
        💀💀 & 🌹🌹
        <button onClick={() => newGame(3)}>New Game</button>
        <button>Join a Game</button>
      </header>

      {gameObj &&
        gameObj?.hands.map((hand, index) => {
          return (
            <PlayerHand key={index} hand={hand} playerNumber={index + 1} />
          );
        })}

      <Gameboard />
    </div>
  );
}

export default App;

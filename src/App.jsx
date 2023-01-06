import React, { useState, useEffect } from "react";
import "./App.css";
import PlayerHand from "./Routes/PlayerHand";
import GameBoard from "./Routes/GameBoard";
import axios from "axios";
import { io } from "socket.io-client";

function App() {
  const [gameState, setGameState] = useState({});
  console.log("gamestate is", gameState);

  // socket.io ~~~~~~~~~~~~~
  const socket = io.connect("http://localhost:5000");

  // this function will request a new game object from server and set it to state
  function newGame() {
    socket.emit("new-game");
  }

  function newRound() {
    axios({
      method: "GET",
      url: `/api/game/newround/`,
    })
      .then((response) => {
        console.log("new round successful");
      })
      .catch((error) => console.log(error));
  }

  function sendPlayerId(id) {
    socket.emit("send-player-id", id);
  }

  function update() {
    socket.emit("send-message", { data: "stuff" });
  }

  // listener for gamestate updates (via socket.io)
  useEffect(() => {
    socket.on("update-gamestate", (updatedGameState) => {
      setGameState(updatedGameState);
    });
  }, [socket]);
  // ~~~~~~~~~~~~~~~~~

  return (
    <div className="App">
      <header className="App-header">
        💀💀 & 🌹🌹
        <button onClick={() => newGame()}>New Game</button>
        <button onClick={() => newRound()}>New Round</button>
      </header>

      <div className="player-hands">
        <h1>Player Hand:</h1>
        <PlayerHand sendPlayerId={sendPlayerId} />
      </div>

      <GameBoard gameState={gameState} />
    </div>
  );
}

export default App;

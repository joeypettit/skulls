import PlayerCard from "../Components/PlayerCard";
import axios from "axios";
import { useState, useEffect } from "react";

function PlayerHand({ sendPlayerId }) {
  const [playerState, setPlayerState] = useState({});
  const [idInput, setIdInput] = useState("");
  const [playerId, setPlayerId] = useState("");

  // this is a get request to get specific player info and
  function updatePlayerInfo() {}

  function handleIdSubmit(event) {
    event.preventDefault();
    sendPlayerId(idInput);
  }

  return (
    <div>
      <h3>{Object.keys(playerState).length !== 0 && playerState.name}</h3>
      <form id="player-form" onSubmit={handleIdSubmit}>
        <label htmlFor="player-id">Player Id</label>
        <input
          type="text"
          id="player-id"
          value={idInput}
          onChange={(e) => setIdInput(e.target.value)}
        />
        <button type="submit">Submit ID</button>
      </form>
      <h4>Player Id: {}</h4>
      <h4>Hand is:</h4>
      {Object.keys(playerState).length !== 0 &&
        playerState.cardsInHand.map((card) => {
          return <PlayerCard card={card} />;
        })}

      <button onClick={updatePlayerInfo}>Update</button>
    </div>
  );
}

export default PlayerHand;

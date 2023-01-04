import PlayerCard from "../Components/PlayerCard";
import axios from "axios";
import { useState, useEffect } from "react";

function PlayerHand({ playerId }) {
  const [playerState, setPlayerState] = useState({});

  // this is a get request to get specific player info and
  function updatePlayerInfo() {
    axios({
      method: "GET",
      url: `/api/game/player/${playerId}`,
    }).then((response) => {
      console.log("playerState is", response.data);
      setPlayerState(response.data);
    });
  }
  useEffect(() => updatePlayerInfo, []);

  return (
    <div>
      <h3>{Object.keys(playerState).length !== 0 && playerState.name}</h3>
      <button onClick={updatePlayerInfo}>Update</button>
    </div>
  );
}

export default PlayerHand;

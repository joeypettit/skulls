import Card from "../Components/Card";
import axios from "axios";
import { useState } from "react";

function PlayerHand({ playerName }) {
  const [playerInfo, setPlayerInfo] = useState();

  // this is a get request to get specific player info and
  function updatePlayerInfo() {}

  return (
    <div>
      <div>
        <h3>{playerName}</h3>
      </div>
    </div>
  );
}

export default PlayerHand;

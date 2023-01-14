import PlayerCard from "./PlayerCard";
import axios from "axios";
import { useState, useEffect } from "react";

function PlayerHand({ playerId }) {
  const [playerState, setPlayerState] = useState({});

  return (
    <div>
      <h3>{Object.keys(playerState).length !== 0 && playerState.name}</h3>
      <h4>Hand is:</h4>
      {Object.keys(playerState).length !== 0 &&
        playerState.cardsInHand.map((card) => {
          return <PlayerCard card={card} />;
        })}

      <button>Update</button>
    </div>
  );
}

export default PlayerHand;

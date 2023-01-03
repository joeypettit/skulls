import axios from "axios";

function Gameboard({ gameState }) {
  return (
    <>
      <h1>This is a Gameboard</h1>
      {Object.keys(gameState).length !== 0 &&
        gameState.players.map((player, index) => {
          return (
            <div key={index}>
              <h1>{player.name}</h1>
              <div>
                Full Hand:{" "}
                {player.fullHand.map((card, index) => {
                  console.log("in player hand", card);
                  return (
                    <span key={index}>
                      {card.isSkull === true ? (
                        <span>💀</span>
                      ) : (
                        <span>🌹</span>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Gameboard;

import Card from "../Components/Card";

function PlayerHand({ hand, playerNumber }) {
  console.log(hand);
  return (
    <div>
      <div>
        <h3>Player {playerNumber}</h3>
        {hand.map((isSkull, index) => {
          return <Card key={index} isSkull={isSkull} />;
        })}
      </div>
    </div>
  );
}

export default PlayerHand;

function Card({ isSkull }) {
  return (
    <div>
      {isSkull ? <div>💀</div> : <div>🌹</div>}
      <div>{isSkull}</div>
    </div>
  );
}

export default Card;

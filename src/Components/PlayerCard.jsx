function Card({ isSkull }) {
  return <div>{isSkull ? <div>💀</div> : <div>🌹</div>}</div>;
}

export default Card;

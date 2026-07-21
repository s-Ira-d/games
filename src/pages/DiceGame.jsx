import { useState } from "react";
import { Link } from "react-router-dom";
import "./DiceGame.css";

function DiceGame() {
  const [dice, setDice] = useState(1);

  const rollDice = () => {
    setDice(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="dice-page">
      <div className="dice-card">
        <Link to="/" className="back-link3">
          Home
        </Link>

        <h1>Roll the Die</h1>

        <p className="dice-description">Test your luck and roll the dice.</p>

        <div className="dice-box">{dice}</div>

        <button className="dice-button" onClick={rollDice}>
          Throw
        </button>
      </div>
    </div>
  );
}

export default DiceGame;

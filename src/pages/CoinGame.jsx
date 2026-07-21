import { useState } from "react";
import { Link } from "react-router-dom";
import "./CoinGame.css";

function CoinGame() {
  const [result, setResult] = useState("");

  const tossCoin = () => {
    const coin = Math.random() < 0.5 ? "Heads" : "Tails";

    setResult(coin);
  };

  return (
    <div className="coin-page">
      <div className="coin-card">
        <Link to="/" className="back-link1">
          Home
        </Link>

        <h1>Coin Flip</h1>

        <p className="coin-description">
          Flip a coin and see what luck decides.
        </p>

        <div className="coin-circle">{result || "?"}</div>

        <button className="coin-button" onClick={tossCoin}>
          Flip
        </button>
      </div>
    </div>
  );
}

export default CoinGame;

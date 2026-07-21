import { useState } from "react";
import { Link } from "react-router-dom";
import "./GuessNumber.css";

function GuessNumber() {
  const [number] = useState(Math.floor(Math.random() * 10) + 1);

  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const checkNumber = () => {
    if (+guess === number) {
      setMessage("Correct!");

      const currentLevel = Number(localStorage.getItem("level")) || 0;

      localStorage.setItem("level", currentLevel + 2);
    } else {
      setMessage("Try again!");
    }
  };

  return (
    <div className="guess-page">
      <div className="guess-card">
        <Link className="back-link4" to="/">
          Home
        </Link>

        <h1>Guess Number</h1>

        <p className="game-description">
          Try to guess the hidden number between 1 and 10.
        </p>

        <input
          className="guess-input"
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter a number"
        />

        <button className="guess-button" onClick={checkNumber}>
          Check
        </button>

        <p className="result-message">{message}</p>
      </div>
    </div>
  );
}

export default GuessNumber;

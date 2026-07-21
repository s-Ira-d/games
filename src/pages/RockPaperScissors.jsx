import { useState } from "react";
import { Link } from "react-router-dom";
import "./RockPaperScissors.css";

function RockPaperScissors() {
  const [result, setResult] = useState("");

  const choices = ["rock", "scissors", "paper"];

  const play = (playerChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === computerChoice) {
      setResult(`Draw! You: ${playerChoice} | Computer: ${computerChoice}`);
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      setResult(` You won! You: ${playerChoice} | Computer: ${computerChoice}`);

      const currentLevel = Number(localStorage.getItem("level")) || 0;

      localStorage.setItem("level", currentLevel + 3);
    } else {
      setResult(
        `Computer won! You: ${playerChoice} | Computer: ${computerChoice}`,
      );
    }
  };

  return (
    <div className="rps-page">
      <div className="rps-card">
        <Link to="/" className="back-link5">
          Home
        </Link>

        <h1>Rock Paper Scissors</h1>

        <p className="rps-description">
          Choose your move and challenge the computer.
        </p>

        <div className="rps-buttons">
          <button onClick={() => play("rock")}> Rock</button>

          <button onClick={() => play("paper")}> Paper</button>

          <button onClick={() => play("scissors")}> Scissors</button>
        </div>

        <div className="result-box">{result || "Make your choice!"}</div>
      </div>
    </div>
  );
}

export default RockPaperScissors;

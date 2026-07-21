import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import "./HomePage.css";

function HomePage() {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const savedLevel = Number(localStorage.getItem("level")) || 0;

    setLevel(savedLevel);
  }, []);

  const resetProgress = () => {
    localStorage.setItem("level", 0);
    setLevel(0);
  };

  return (
    <div className="home-page">
      <p className="logo-text">Brain Training Games</p>

      <h1 className="main-title">Games</h1>

      <h2 className="subtitle">Play Smart. Think Fast.</h2>

      <p className="description">
        Fun mini-games that secretly train your brain for real-life skills -
        reaction time, memory, math, and problem-solving.
      </p>

      <div className="level-box"> Level {level}</div>

      <div className="games-header">
        <h2 className="games-title">Choose Your Game</h2>

        <button className="reset-button" onClick={resetProgress}>
          Reset Progress
        </button>
      </div>

      <div className="games-grid">
        <GameCard
          title="Guess Number"
          description="Try to guess the secret number in as few attempts as possible."
          difficulty="Medium"
          path="/guess"
        />

        <GameCard
          title="Rock Paper Scissors"
          description="Challenge the computer in the classic game of strategy."
          difficulty="Difficult"
          path="/rps"
        />

        <GameCard
          title="Roll the Die"
          description="Roll a virtual die and test your luck."
          difficulty="Easy"
          path="/dice"
        />

        <GameCard
          title="Coin"
          description="Flip a coin and see if fate is on your side."
          difficulty="Easy"
          path="/coin"
        />

        <GameCard
          title="Random Color"
          description="Generate random colors and explore new combinations."
          difficulty="Medium"
          path="/color"
        />

        <GameCard
          title="Memory Cards"
          description="Test your memory by finding matching pairs."
          difficulty="Difficult"
          path="/memory"
        />
      </div>
    </div>
  );
}

export default HomePage;

import GameCard from "../components/GameCard";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <p className="logo-text">Brain Training Games</p>

      <h1 className="main-title">Games</h1>

      <h2 className="subtitle">Play Smart. Think Fast.</h2>

      <p className="description">
        Fun mini-games that secretly train your brain for real-life skills -
        reaction time, memory, math, and problem-solving.
      </p>

      <h2 className="games-title">Choose Your Game</h2>

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
      </div>
    </div>
  );
}

export default HomePage;

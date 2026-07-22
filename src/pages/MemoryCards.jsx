import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import cat1 from "../img/1.jpeg";
import cat2 from "../img/2.jpeg";
import cat3 from "../img/3.jpeg";
import cat4 from "../img/4.jpeg";
import cat5 from "../img/5.jpeg";
import cat6 from "../img/6.jpeg";
import cat7 from "../img/7.jpeg";
import cat8 from "../img/8.jpeg";
import cat9 from "../img/9.jpeg";
import cat10 from "../img/10.jpeg";
import cat11 from "../img/11.jpeg";

import "./MemoryCards.css";

const allImages = [
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat6,
  cat7,
  cat8,
  cat9,
  cat10,
  cat11,
];

function MemoryCards() {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);

  const [unlockedLevel, setUnlockedLevel] = useState(
    Number(localStorage.getItem("memoryUnlocked")) || 1,
  );

  const shuffleCards = (level) => {
    const pairsCount = level + 3;

    const images = allImages.slice(0, pairsCount);

    const shuffled = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        id: index,
        image: card,
        matched: false,
      }));

    setCards(shuffled);
    setFirstCard(null);
    setSecondCard(null);
    setMoves(0);
  };

  useEffect(() => {
    if (selectedLevel) {
      shuffleCards(selectedLevel);
    }
  }, [selectedLevel]);

  const handleChoice = (card) => {
    if (disabled) return;

    if (!firstCard) {
      setFirstCard(card);
    } else if (card.id !== firstCard.id) {
      setSecondCard(card);
    }
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);
      setMoves((prev) => prev + 1);

      if (firstCard.image === secondCard.image) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.image === firstCard.image ? { ...card, matched: true } : card,
          ),
        );

        resetTurn();
      } else {
        setTimeout(resetTurn, 1000);
      }
    }
  }, [firstCard, secondCard]);

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  const isFinished = cards.length > 0 && cards.every((card) => card.matched);

  useEffect(() => {
    if (!isFinished || !selectedLevel) return;

    const completed = JSON.parse(localStorage.getItem("memoryCompleted")) || [];

    if (!completed.includes(selectedLevel)) {
      completed.push(selectedLevel);

      localStorage.setItem("memoryCompleted", JSON.stringify(completed));

      const reward = selectedLevel + 2;

      const currentXP = Number(localStorage.getItem("level")) || 0;

      localStorage.setItem("level", currentXP + reward);
    }

    if (selectedLevel === unlockedLevel && unlockedLevel < 8) {
      localStorage.setItem("memoryUnlocked", unlockedLevel + 1);

      setUnlockedLevel(unlockedLevel + 1);
    }
  }, [isFinished]);

  if (!selectedLevel) {
    return (
      <div className="memory-page">
        <div className="memory-card">
          <Link to="/" className="back-link6">
            Home
          </Link>

          <h1>Memory Levels</h1>

          <div className="levels-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((level) => (
              <button
                key={level}
                className={`level-button ${
                  level <= unlockedLevel ? "unlocked" : "locked"
                }`}
                disabled={level > unlockedLevel}
                onClick={() => setSelectedLevel(level)}
              >
                Level {level}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="memory-page">
      <div className="memory-card">
        <button
          className="back-to-levels"
          onClick={() => setSelectedLevel(null)}
        >
          Levels
        </button>

        <h1>Level {selectedLevel}</h1>

        <p className="moves">Moves: {moves}</p>

        <div className="memory-grid">
          {cards.map((card) => {
            const flipped =
              card === firstCard || card === secondCard || card.matched;

            return (
              <div
                key={card.id}
                className={`memory-tile ${flipped ? "flipped" : ""}`}
                onClick={() => handleChoice(card)}
              >
                {flipped ? <img src={card.image} alt="" /> : "?"}
              </div>
            );
          })}
        </div>

        {isFinished && (
          <div className="win-message">
            Congratulations! Level completed!
            <br />
            Reward: +{selectedLevel + 2}
          </div>
        )}

        <button
          className="restart-button"
          onClick={() => shuffleCards(selectedLevel)}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default MemoryCards;

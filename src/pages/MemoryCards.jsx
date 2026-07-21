import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cat1 from "../img/1.jpeg";
import cat2 from "../img/2.jpeg";
import cat3 from "../img/3.jpeg";
import cat4 from "../img/4.jpeg";
import "./MemoryCards.css";

const cardImages = [cat1, cat2, cat3, cat4];

function MemoryCards() {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
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

  const handleChoice = (card) => {
    if (disabled) return;

    if (firstCard === null) {
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
        setTimeout(() => {
          resetTurn();
        }, 1000);
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
    if (isFinished) {
      const currentLevel = Number(localStorage.getItem("level")) || 0;

      localStorage.setItem("level", currentLevel + 3);
    }
  }, [isFinished]);

  return (
    <div className="memory-page">
      <div className="memory-card">
        <Link to="/" className="back-link6">
          Home
        </Link>

        <h1>Memory Cards</h1>

        <p className="memory-description">Find all matching pairs.</p>

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
            Congratulations! You won in {moves} moves!
          </div>
        )}

        <button className="restart-button" onClick={shuffleCards}>
          New Game
        </button>
      </div>
    </div>
  );
}

export default MemoryCards;

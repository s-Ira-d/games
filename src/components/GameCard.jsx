import { Link } from "react-router-dom";
import "./GameCard.css";

function GameCard({ title, description, difficulty, path }) {
  return (
    <Link to={path} className="game-card-link">
      <div className="game-card">
        <div className="card-header">
          <h3>{title}</h3>
          <span className="difficulty">{difficulty}</span>
        </div>

        <p className="card-description">{description}</p>
      </div>
    </Link>
  );
}

export default GameCard;

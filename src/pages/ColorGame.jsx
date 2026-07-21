import { useState } from "react";
import { Link } from "react-router-dom";
import "./ColorGame.css";

function ColorGame() {
  const [color, setColor] = useState("#3498db");

  const generateColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setColor(randomColor);
  };

  return (
    <div className="color-page">
      <div className="color-card">
        <Link to="/" className="back-link2">
          Home
        </Link>

        <h1>Random Color</h1>

        <p className="color-description">
          Generate random colors and discover new shades.
        </p>

        <div className="color-preview" style={{ backgroundColor: color }}></div>

        <h3 className="color-code">{color}</h3>

        <button className="color-button" onClick={generateColor}>
          Generate Color
        </button>
      </div>
    </div>
  );
}

export default ColorGame;

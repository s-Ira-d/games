import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GuessNumber from "./pages/GuessNumber";
import RockPaperScissors from "./pages/RockPaperScissors";
import DiceGame from "./pages/DiceGame";
import CoinGame from "./pages/CoinGame";
import ColorGame from "./pages/ColorGame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/guess" element={<GuessNumber />} />
      <Route path="/rps" element={<RockPaperScissors />} />
      <Route path="/dice" element={<DiceGame />} />
      <Route path="/coin" element={<CoinGame />} />
      <Route path="/color" element={<ColorGame />} />
    </Routes>
  );
}

export default App;

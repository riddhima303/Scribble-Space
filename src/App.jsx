import { useState } from "react";
import "./App.css";

export default function App() {
const [showPopup, setShowPopup] = useState(true);

return ( 
  <div id="paper">
  <canvas id="drawingCanvas"></canvas>
  {showPopup && (
    <div className="overlay">
      <div className="cat-window">
      <div className="title-bar">Scribble-Space</div>
      <div className="window-content">
      <p>You have received a cat.</p>
      <img src="/cat.png" alt="cat" className="cat-img" />
      <button className="ok-btn" onClick={()  => setShowPopup(false)}>OK</button>
      </div>
      </div>
    </div>
  )}
</div>
);
}

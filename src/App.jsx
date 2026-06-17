import { useState } from "react";
import "./App.css";
import catImage from "./cat.png";

export default function App() {
const [showPopup, setShowPopup] = useState(true);
const [showCat, setShowCat] = useState(false);
const [catPos, setCatPos] = useState({ x: 0, y: 0 });

const receiveCat = () => {
setShowPopup(false);


setCatPos({
  x: Math.random() * (window.innerWidth - 120),
  y: Math.random() * (window.innerHeight - 120),
});

setShowCat(true);


};

return ( <div id="paper"> <canvas id="drawingCanvas"></canvas>


  {showPopup && (
    <div className="overlay">
      <div className="cat-window">
        <div className="title-bar">
          Scribble-Space
        </div>

        <div className="window-content">
          <p>You have received a cat.</p>

          <img
            src={catImage}
            alt="cat"
            className="cat-img"
          />

          <button
            className="ok-btn"
            onClick={receiveCat}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )}

  {showCat && (
    <img
      src={catImage}
      alt="cat"
      className="screen-cat"
      style={{
        left: `${catPos.x}px`,
        top: `${catPos.y}px`,
      }}
    />
  )}
</div>


);
}

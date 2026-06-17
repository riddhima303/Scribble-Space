import { useState, useRef, useEffect } from "react";
import "./App.css";
import catImage from "./cat.png";

export default function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [showCat, setShowCat] = useState(false);
  const [catPos, setCatPos] = useState({ x: 0, y: 0 });

  const [penColor, setPenColor] = useState("#303634");
  const [showColors, setShowColors] = useState(false);

  const canvasRef = useRef(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.strokeStyle = penColor;
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    isDrawing.current = true;

    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  };

  const draw = (e) => {
    if (!isDrawing.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = penColor;

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const receiveCat = () => {
    setShowPopup(false);

    setCatPos({
      x: Math.random() * (window.innerWidth - 120),
      y: Math.random() * (window.innerHeight - 120),
    });

    setShowCat(true);
  };

  return (
    <div id="paper">
      <canvas
        ref={canvasRef}
        id="drawingCanvas"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />

      <div className="toolbar">
        <button
          className="color-btn"
          onClick={() => setShowColors(!showColors)}
        >
          <span
            className="current-color"
            style={{ backgroundColor: penColor }}
          ></span>
        </button>

        {showColors && (
          <div className="color-palette">
            <button
              className="palette-color"
              style={{ backgroundColor: "#303634" }}
              onClick={() => {
                setPenColor("#303634");
                setShowColors(false);
              }}
            />

            <button
              className="palette-color"
              style={{ backgroundColor: "#9D7A98" }}
              onClick={() => {
                setPenColor("#9D7A98");
                setShowColors(false);
              }}
            />

            <button
              className="palette-color"
              style={{ backgroundColor: "#D27590" }}
              onClick={() => {
                setPenColor("#D27590");
                setShowColors(false);
              }}
            />

            <button
              className="palette-color"
              style={{ backgroundColor: "#DB7F8E" }}
              onClick={() => {
                setPenColor("#DB7F8E");
                setShowColors(false);
              }}
            />

            <button
              className="palette-color"
              style={{ backgroundColor: "#CF4A4B" }}
              onClick={() => {
                setPenColor("#CF4A4B");
                setShowColors(false);
              }}
            />
          </div>
        )}
      </div>

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
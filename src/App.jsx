import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  const handleIncrement = () => {
    setNum((value) => {
      return (value = value + 1);
    });
  };
  const handleDecrement = () => {
    setNum((value) => {
      if (value > 0) {
        return (value = value - 1);
      }
      return value;
    });
  };

  const handleReset = () => {
    setNum((value) => {
      return value = 0;
    })
  }
  return (
    <div className="overall-wrapper">
      <div className="icons">
        <i className="fa-solid fa-circle-half-stroke"></i>
        <i className="fa-solid fa-circle-info"></i>
        <i className="fa-solid fa-gear"></i>
        <i className="fa-solid fa-rotate-right" onClick={handleReset}></i>
      </div>
      <div className="content">
        <button id="addBtn" onClick={handleDecrement}>
          <i className="fas fa-minus"></i>
        </button>
        <h1>{num}</h1>
        <button id="subBtn" onClick={handleIncrement}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="data">
        <span>Hello World</span>
      </div>
    </div>
  );
}

export default App;

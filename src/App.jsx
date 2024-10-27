import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [isModalOpen, setIsModalOpen] = useState("modelClose");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "dark") {
        return "light";
      } else {
        return "dark";
      }
    });
  };

  const toggleModal = () => {
    setIsModalOpen((prevModel) => {
      if (prevModel === "modelClose") {
        return "modelOpen";
      } else {
        return "modelClose";
      }
    });
  };

  const handleIncrement = () => {
    setNum((num) => {
      return (num = num + 1);
    });
  };
  const handleDecrement = () => {
    setNum((num) => {
      if (num > 0) {
        return (num = num - 1);
      }
      return num;
    });
  };

  const handleReset = () => {
    setNum((num) => {
      if (num > 0) {
        return (num = 0);
      }
      return num;
    });
  };
  return (
    <div className={`overall-wrapper ${theme}`}>
      {/* Modal Section*/}
      <div id="myModal" className={`modal ${isModalOpen}`}>
        <div className="modal-content">
          <h2>Just Counter</h2>
          <p>A simple tool for counting things and keeping track of numbers.</p>
          <p className="learn-more">
            <a href="https://github.com/Yashwanth2008">Learn more</a>
          </p>
          <p className="copyright">
            ©
            <a
              href="https://github.com/Yashwanth2008"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yashwanth V
            </a>
          </p>
          <div className="close-modal">
            <i className="fa-regular fa-circle-xmark" onClick={toggleModal}></i>
          </div>
        </div>
      </div>
      {/* Icons Section */}
      <div className="icons">
        <i
          id="navicons"
          className="fa-solid fa-circle-half-stroke"
          onClick={toggleTheme}
        ></i>
        <i
          id="navicons"
          className="fa-solid fa-circle-info"
          onClick={toggleModal}
        ></i>
        {/* <i id="navicons" className="fa-solid fa-gear"></i> */}
        <i
          id="navicons"
          className="fa-solid fa-rotate-right"
          onClick={handleReset}
        ></i>
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
        {/* <span>Limit for Counter will be Implemented Soon</span> */}
      </div>
    </div>
  );
}

export default App;

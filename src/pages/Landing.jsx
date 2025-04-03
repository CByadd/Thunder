import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="buttons">
        <button className="start-button" onClick={() => navigate("/register")}>
          Register
        </button>
        <button className="start-button" onClick={() => navigate("/login")}>
          Login
        </button>
        <div className="block1"></div>
        <div className="block2"></div>
        <div className="block3"></div>
        <div className="block4"></div>
        <p className="green">The Sneaker Spot</p>
        <div className="content-boxs">
          <p className="contents">
            Encompass the visual appeal and style choices related to footwear,
            ranging from classic designs to unique, personalized styles, often
            reflecting personal expression and trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
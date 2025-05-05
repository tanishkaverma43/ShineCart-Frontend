import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Shine with Timeless Elegance</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Explore</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Exquisite Jewellery</p>
          <p>Crafted Just for You</p>
        </div>
        <div className="hero-latest-btn">
          <div>Shop the Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Hero;

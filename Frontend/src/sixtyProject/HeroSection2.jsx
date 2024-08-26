import React from "react";
import Background from "../images/Background.png";
import Img1 from "../images/Img1.png";
import Img2 from "../images/Img2.png";
import Img3 from "../images/Img3.png";

const HeroSection2 = () => {
  return (
    <div className="image-section">
      <div className="image-section1">
        <img src={Background} alt="" />

        <div className="image1">
          <img src={Img1} alt="" />
          <p>Jot down reusable code snippets</p>
        </div>
      </div>
      <div className="image-section-content">
        <div className="image-section2">
          <img src={Background} alt="" />

          <div className="image2">
            <img src={Img2} alt="" />
            <p>Jot down reusable code snippets</p>
          </div>
        </div>

        <div className="image-section3">
          <img src={Background} alt="" />

          <div className="image3">
            <img src={Img3} alt="" />
            <p>Jot down your daily activities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;

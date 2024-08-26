import React from "react";
import "./Sixty.css";
import Header from "./Header";
import HeroSection1 from "./HeroSection1";
import HeroSection2 from "./HeroSection2";
// import SecondPage from "../SecondPage";

const Sixty = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="hero-section">
        <div className="hero-section-content1">
          <HeroSection1 />
        </div>
        <div className="hero-section-content2">
          <HeroSection2 />
        </div>
      </div>
    </>
  );
};

export default Sixty;

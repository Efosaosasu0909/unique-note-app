import React from "react";
import List from "../images/List-icon.png";
import { Link, useNavigate } from "react-router-dom";

const HeroSection1 = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div>
        <h2>
          You can’t really manage time, but you can take small steps that counts
          on a long run.
        </h2>
      </div>
      <div className="list">
        <p>
          <img src={List} alt="" /> Track your daily activities
        </p>
        <p>
          <img src={List} alt="" /> Save important notes or code snippets you’re
          likely to reuse
        </p>
        <p>
          <img src={List} alt="" /> keep a diary of your daily activities
        </p>
      </div>
      <div>
        <button
        // onClick={() => {
        //   navigate("/second-page");
        // }}
        >
          <Link to="/users/signin">Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection1;

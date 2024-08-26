import React from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
const HomeHeader = () => {
  return (
    <div>
      <header>
        <div>
          <img src={Logo} alt="" />
        </div>

        <div className="header-button">
          <button
            className="button1"
            // onClick={() => {
            //   navigate("/users/signin");
            // }}
          >
            <Link to="/users/signin">Login</Link>
          </button>
          <button
            className="button2"
            // onClick={() => {
            //   navigate("/users/signup");
            // }}
          >
            <Link to="/users/signup">Sign Up</Link>
          </button>
        </div>
      </header>
    </div>
  );
};

export default HomeHeader;

import React from "react";
import Plus from "../images/Plus.png";
import Minus from "../images/Minus.png";
import Dots from "../images/Dots.png";
import { useNavigate } from "react-router-dom";

const NavSection = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div className="nav-section-content1">
        {" "}
        <img
          src={Dots}
          alt=""
          onClick={() => {
            navigate("/lists");
          }}
        />
      </div>

      <div className="nav-section-content2">
        <div className="plus">
          <img src={Plus} alt="" />
        </div>
        <div className="minus">
          <img src={Minus} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavSection;

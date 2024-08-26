import React from "react";
import Logo from "../images/Logo.png";
import Archive from "../images/Archives.png";
import Circle from "../images/Circle.png";
import Notes from "../images/Notes.png";
import Search from "../images/Search.png";
import Settings from "../images/Settings.png";
import Todo from "../images/Todo.png";
import Trophy from "../images/Trophy.png";
import { NavLink, useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  let navigate = useNavigate();

  return (
    <div>
      <header className="second-page-header">
        <div className="second-page-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="second-page-input">
          <img src={Search} alt="" />
          <input type="text" placeholder="Search Notes" />
        </div>
      </header>
      <div className="second-page-sub-header">
        <div className="second-page-sub-header-content">
          <div className="item">
            <span>
              <NavLink>
                <img src={Notes} alt="" /> <p>Notes</p>{" "}
                <img src={Circle} alt="" />
              </NavLink>
            </span>
          </div>
          <div>
            <NavLink>
              <img src={Todo} alt="" /> <p>Todos</p> <img src={Circle} alt="" />
            </NavLink>
          </div>
          <div>
            <NavLink>
              <img src={Trophy} alt="" /> <p>Events</p>{" "}
              <img src={Circle} alt="" />
            </NavLink>
          </div>
          <div>
            <NavLink>
              {" "}
              <img src={Archive} alt="" /> <p>Archives</p>{" "}
              <img src={Circle} alt="" />
            </NavLink>
          </div>
          <div>
            <NavLink>
              <img src={Settings} alt="" /> <p>Settings</p>
            </NavLink>
          </div>
        </div>
        <div className="header-button">
          <button
            className="button1"
            onClick={() => {
              navigate("/note");
            }}
          >
            +
          </button>
          <button
            className="button2"
            onClick={() => {
              navigate("/note");
            }}
          >
            Create Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

import React from "react";
import "./backdrop.css";
// import { useNavigate } from "react-router-dom";

const backdrop = ({ close }) => {
  // let navigate = useNavigate();
  return <div className="backdrop" onClick={close}></div>;
};

export default backdrop;

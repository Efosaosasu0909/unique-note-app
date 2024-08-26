import React from "react";
import { useNavigate } from "react-router-dom";
import Backdrop from "./backdrop";
import Modal from "./Modal";
import SecondPage from "./SecondPage";
import { FaTimes } from "react-icons/fa";
import Warning from "../images/Warning.png";
const DeletePage = () => {
  let navigate = useNavigate();
  return (
    <>
      <SecondPage />
      <Backdrop />
      <Modal>
        <div className="overall-box2">
          <div className="form">
            <div
              className="icon"
              onClick={() => {
                navigate("/second-page");
              }}
            >
              <FaTimes />
            </div>
            <div className="delete-image">
              <img src={Warning} alt="" />
            </div>
            <div className="delete-text">
              <p>Are you sure you want to delete this note?</p>
            </div>
            <div className="delete-button">
              <button
                className="cancel"
                onClick={() => {
                  navigate("/second-page");
                }}
              >
                Cancel
              </button>
              <button className="delete">Delete</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeletePage;

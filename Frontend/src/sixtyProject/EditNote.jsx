import React from "react";
import { useNavigate } from "react-router-dom";
import Backdrop from "./backdrop";
import Modal from "./Modal";
// import Sixty from "./Sixty";
import SecondPage from "./SecondPage";
import { FaTimes } from "react-icons/fa";

const EditNote = () => {
  let navigate = useNavigate();
  return (
    <>
      <SecondPage />
      <Backdrop close={() => navigate("/second-page")} />
      <Modal>
        <div className="overall-box2">
          <form className="form">
            <div className="note-title">
              <div>
                <h2>Edit Note</h2>
              </div>
              <div
                className="icon"
                onClick={() => {
                  navigate("/second-page");
                }}
              >
                <FaTimes />
              </div>
            </div>
            <div className="note-input">
              <label htmlFor="">Title</label>
              <input type="text" placeholder="Note title" />
            </div>
            <div className="note-input">
              <label htmlFor="">Tag</label>
              <input type="text" placeholder="Note tag" />
            </div>
            <div className="note-input">
              <label htmlFor="">Note</label>
              <textarea placeholder="Note body" />
            </div>
            <div className="edit-button">
              <button className="edit-edit">Edit</button>
              <button className="edit-cancel">Cancel</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default EditNote;

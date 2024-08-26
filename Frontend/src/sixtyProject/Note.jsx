import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Backdrop from "./backdrop";
import Modal from "./Modal";
// import Sixty from "./Sixty";
import SecondPage from "./SecondPage";
import { FaTimes } from "react-icons/fa";

const Note = () => {
  let navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/notes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.notes);
        setNotes(data.notes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [note, setNote] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addNote = () => {
    fetch("http://localhost:5000/api/notes/create", {
      method: "POST",
      body: JSON.stringify({
        // title: title,
        // tag: tag,
        note: note,
        isComplete: false,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setNotes([...notes, data.newNote]);
      });
  };
  return (
    <>
      <SecondPage />
      <Backdrop close={() => navigate("/second-page")} />
      <Modal>
        <div className="overall-box2">
          <form className="form" onSubmit={handleSubmit}>
            <div className="note-title">
              <div>
                <h2>Write a Note</h2>
              </div>
              <div
                className="icon"
                onClick={() => {
                  navigate("/users/dashboard");
                }}
              >
                <FaTimes />
              </div>
            </div>
            <div className="note-input">
              <label htmlFor="">Title</label>
              <input
                type="text"
                placeholder="Note title"
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
            <div className="note-input">
              <label htmlFor="">Tag</label>
              <input
                type="text"
                placeholder="Note tag"
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
            <div className="note-input">
              <label htmlFor="">Note</label>
              <textarea
                placeholder="Note body"
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
            <div className="note-button">
              <button onClick={() => addNote()}>Create</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};
//  onClick={() => {
//                   navigate("/second-page");
//                 }}
export default Note;

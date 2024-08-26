import React, { useEffect } from "react";
import Arrow from "../images/Arrow.png";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotes } from "../redux/actions/noteActions";

const SecondPageSection2 = () => {
  const { noteId } = useParams();
  const dispatch = useDispatch();
  console.log(noteId);

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch, noteId]);

  const note = useSelector(
    (state) => noteId && state.notes.notes.find((note) => note._id === noteId)
  );

  console.log(note);
  return (
    <div>
      {/* <h1>{note.title}</h1> */}
      <p>{note.description}</p>

      {/* <div>
        <h1>Learn Darts</h1>
        <p>
          <div>
            Exercitation in consectetur velit enim ullamco aliqua officia mollit
            eu nulla sunt aliquip aute nulla. Aliquip tempor et exercitation
            minim adipisicing minim velit. Id elit culpa aute est. Aute aute
            excepteur et adipisicing adipisicing officia dolor. Commodo
            incididunt ad labore incididunt aliquip deserunt anim eu incididunt
            est mollit. Proident aliqua non aliquip dolore sint voluptate
            adipisicing. Tempor in fugiat incididunt ea officia ullamco ut qui
            excepteur dolore ut et ut. Ut do laborum culpa consectetur duis et
            velit est nulla. In consectetur nisi duis ad quis magna anim ut
            dolor minim irure proident do irure. Sit do quis sunt consequat id
            incididunt quis.
          </div>
          <div>
            Exercitation in consectetur velit enim ullamco aliqua officia mollit
            eu nulla sunt aliquip aute nulla. Aliquip tempor et exercitation
            minim adipisicing minim velit. Id elit culpa aute est. Aute aute
            excepteur et adipisicing adipisicing officia dolor. Commodo
            incididunt ad labore incididunt aliquip deserunt anim eu incididunt
            est mollit. Proident aliqua non aliquip dolore sint voluptate
            adipisicing. Tempor in fugiat incididunt ea officia ullamco ut qui
            excepteur dolore ut et ut. Ut do laborum culpa consectetur duis et
            velit est nulla. In consectetur nisi duis ad quis magna anim ut
            dolor minim irure proident do irure. Sit do quis sunt consequat id
            incididunt quis.
          </div>
          <div className="arrow">
            <img src={Arrow} alt="" />
          </div>
        </p>
      </div> */}
    </div>
  );
};

export default SecondPageSection2;

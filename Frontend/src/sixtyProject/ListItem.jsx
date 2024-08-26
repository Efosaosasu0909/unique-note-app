import React from "react";
import { FaTrash, FaEdit, FaArchive, FaPrint } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ListItem.css";
// import SecondPage from "../SecondPage";
// import Backdrop from "./backdrop";
const ListItem = ({ note }) => {
  let navigate = useNavigate();
  return (
    <>
      {/* <SecondPage /> */}
      {/*<Backdrop close={() => navigate("/second-page")} /> */}
      <ul className="note-operators">
        <li
          onClick={() => {
            navigate("/edit-note");
          }}
        >
          <span>
            <FaEdit />
          </span>
          <span>Edit</span>
        </li>
        <li
          onClick={() => {
            navigate("/delete-page");
          }}
        >
          <span>
            <FaTrash />
          </span>
          <span>Delete</span>
        </li>
        <li>
          <span>
            <FaPrint />
          </span>
          <span>Print</span>
        </li>
        <li>
          <span>
            <FaArchive />
          </span>
          <span>Archive</span>
        </li>
      </ul>
    </>
  );
};

export default ListItem;

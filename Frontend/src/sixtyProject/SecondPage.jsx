import React from "react";
import SecondPageHeader from "./SecondPageHeader";
import SecondPageSection1 from "./SecondPageSection1";
import SecondPageSection2 from "./SecondPageSection2";
import NavSection from "./NavSection";
// import { deleteNote } from "../../../Server/controllers/noteControllers";

const SecondPage = () => {
  return (
    <div className="second-page">
      {/* <SecondPageHeader /> */}
      <div className="second-page-main">
        <SecondPageSection1 />
        {/* {notes?.map((note) => (
          // key={note?._id}
          // id={note?._id}
          // note={note?.note}
          // setNotes={setNotes}
          // deleteNote={deleteNote}
          
        ))} */}

        <div className="second-page-main-content2">
          <SecondPageSection2 />
        </div>
        <div className="navigation-section">
          <NavSection />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;

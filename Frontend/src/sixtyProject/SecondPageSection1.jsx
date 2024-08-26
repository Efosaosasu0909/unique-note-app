import React, { useEffect } from "react";
import ListItem from "./ListItem";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllNotes } from "../redux/actions/noteActions";
import { Link } from "react-router-dom";
import moment from "moment";
import ReadMore from "./ReadMore";

const SecondPageSection1 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);

  const { notes } = useSelector((state) => state.notes);
  console.log(notes);
  return (
    <div>
      {notes.length ? (
        notes.map((note) => (
          <div key={note._id} className="second-page-main-content">
            <h2>{note.title}</h2>
            <ReadMore>{note.description}</ReadMore>
            <div>
              <small>{note.tag}</small>
              {moment(note.createdAt).fromNow()}
              <Link>Read more</Link>
              <button>...</button>
            </div>
          </div>
        ))
      ) : (
        <h1>No Notes</h1>
      )}
    </div>
  );
};

export default SecondPageSection1;

// import React, { useEffect } from "react";
// import ThreeDots from "../images/ThreeDots.png";
// import ListItem from "./ListItem";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllNotes } from "../redux/actions/noteActions";

// const SecondPageSection1 = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllNotes());
//   }, [dispatch]);
//   const { notes } = useSelector((state) => state.notes);
//   console.log(notes);

//   // const notesData = [
//   //   {
//   //     id: 1,
//   //     title: "Title 1",
//   //     content:
//   //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis officia, suscipit tempore ab alias amet quidem eos ducimus veniam, necessitatibus sunt magni explicabo hic rerum voluptatibus unde, natus optio!",
//   //     tag: "personal",
//   //     time: new Date().getTime(),
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Title 1",
//   //     content:
//   //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis officia, suscipit tempore ab alias amet quidem eos ducimus veniam, necessitatibus sunt magni explicabo hic rerum voluptatibus unde, natus optio!",
//   //     tag: "personal",
//   //     time: new Date().getTime(),
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "Title 1",
//   //     content:
//   //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis officia, suscipit tempore ab alias amet quidem eos ducimus veniam, necessitatibus sunt magni explicabo hic rerum voluptatibus unde, natus optio!",
//   //     tag: "personal",
//   //     time: new Date().getTime(),
//   //   },
//   //   {
//   //     id: 4,
//   //     title: "Title 1",
//   //     content:
//   //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis officia, suscipit tempore ab alias amet quidem eos ducimus veniam, necessitatibus sunt magni explicabo hic rerum voluptatibus unde, natus optio!",
//   //     tag: "personal",
//   //     time: new Date().getTime(),
//   //   },
//   // ];
//   const [showPop, setShowPop] = useState(true);

//   return (
//     <div>

//       {/* {notes.length ? (
//         notes.map((note) => (
//           <div></div>
//         ))
//       )} */}

//       {/* {notesData.map((note) => (
//         <div>
//           <div key={note.id}>
//             <h2>{note.title}</h2>
//             <p>{note.content}</p>
//           </div>
//           <div>
//             <span>{note.tag}</span>
//             <small>{note.time}</small>
//           </div>
//         </div>
//       ))} */}
//       <div>
//         {notes.length ? (
//           notes.map((note) => (
//             <div className="second-page-main-content" key={note._id}>
//               <h2>{note.title}</h2>
//               <p>{note.description}</p>
//             </div>
//           ))
//         )}

//         {/* <h2>10 Hours Fasting every week</h2>
//         <p>
//           Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut
//           elit incididunt irure nisi duis aliquip anim velit. Officia laborum
//           consectetur quis ea pariatur proident exercitation.
//         </p>
//         <div>
//           <p>Personal</p> <small>23 hours ago</small>{" "}
//           <img src={ThreeDots} alt="" onClick={() => setShowPop(!showPop)} />
//         </div>
//         {showPop && <ListItem />} */}
//         {/* <div className="second-page-main-content">
//           <div></div>
//           <h2>Visit Plateau State</h2>
//           <p>
//             Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut
//             elit incididunt irure nisi duis aliquip anim velit. Officia laborum
//             consectetur quis ea pariatur proident exercitation.
//           </p>
//           <div>
//             <p>Travel</p> <small>23 hours ago</small>{" "}
//             <img src={ThreeDots} alt="" onClick={() => setShowPop(!showPop)} />
//           </div>
//           {showPop && <ListItem />}
//         </div> */}

//         {/* <div className="second-page-main-content">
//           <h2>Birthday debrief</h2>
//           <p>
//             Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut
//             elit incididunt irure nisi duis aliquip anim velit. Officia laborum
//             consectetur quis ea pariatur proident exercitation.
//           </p>
//           <div>
//             <p>Personal</p> <small>3 hours ago</small>{" "}
//             <img src={ThreeDots} alt="" onClick={() => setShowPop(!showPop)} />
//           </div>
//           {showPop && <ListItem />}
//         </div> */}
//         {/* <div className="second-page-main-content">
//           <h2>Learn Darts</h2>
//           <p>
//             Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut
//             elit incididunt irure nisi duis aliquip anim velit. Officia laborum
//             consectetur quis ea pariatur proident exercitation.
//           </p>
//           <div>
//             <p>Personal</p> <small>23 hours ago</small>{" "}
//             <img
//               src={ThreeDots}
//               alt=""
//               onClick={() => setShowPop(!showPop)}
//               // onClick={() => <ListItem pop4={setShowPop(!showPop)} />}
//             />
//           </div>
//           {showPop && <ListItem />}
//         </div> */}
//       </div>
//       {/* {notes?.map((note) => (
//            key={note?._id}
//            id={note?._id}
//            note={note?.note}
//           setNotes={setNotes}
//           deleteNote={deleteNote}

//         ))}  */}
//     </div>
//   );
// };

// export default SecondPageSection1;

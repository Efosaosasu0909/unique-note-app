import ReactDOM from "react-dom";
import "./Modal2.css";
const Modal2 = ({ child }) => {
  return ReactDOM.createPortal(
    <>
      <div className="modal-box">{child}</div>
    </>,
    document.getElementById("modal2")
  );
};

export default Modal2;

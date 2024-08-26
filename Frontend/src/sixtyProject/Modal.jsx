import ReactDOM from "react-dom";
import "./Modal.css";
const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <>
      <div className="modal-box">{children}</div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;

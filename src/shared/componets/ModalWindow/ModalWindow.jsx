import Modal from "react-modal";
import { icons as sprite } from "../../icons/index";
import "./ModalWindow.css";

const ModalWindow = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={"modal-overlay"}
      className={"modal-content"}
      closeTimeoutMS={300}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
    >
      <button onClick={() => onClose()} className="modal-close-button">
        <svg className="iconClose">
          <use xlinkHref={`${sprite}#icon-close`} />
        </svg>
      </button>
      {children}
    </Modal>
  );
};

export default ModalWindow;

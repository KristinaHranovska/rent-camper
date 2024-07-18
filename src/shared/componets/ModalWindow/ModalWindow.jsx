import Modal from "react-modal";
import { icons as sprite } from "shared/icons/index";
import "./ModalWindow.css";
import { useEffect } from "react";

const ModalWindow = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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

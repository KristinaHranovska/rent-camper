import { createContext, useState, useCallback } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [onCloseCallback, setOnCloseCallback] = useState(() => () => {});

  const openModal = useCallback((content, onClose = () => {}) => {
    setModalContent(content);
    setIsOpen(true);
    setOnCloseCallback(() => onClose);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalContent(null);
    if (typeof onCloseCallback === "function") {
      onCloseCallback();
    } else {
      console.error("onCloseCallback is not a function", onCloseCallback);
    }
  }, [onCloseCallback]);

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, modalContent }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;

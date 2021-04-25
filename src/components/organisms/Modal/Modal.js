import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper } from 'components/organisms/Modal/Modal.styles';
import { Button } from 'components/atoms/Button/Button';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');
  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <ModalWrapper>
      {children}
      <Button onClick={handleClose}>Close</Button>
    </ModalWrapper>,
    modalNode
  );
};

export default Modal;

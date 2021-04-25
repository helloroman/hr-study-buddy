import { useState } from 'react';
import Modal from 'components/organisms/Modal/Modal';

const useModal = (initialState = false) => {
  const [isOpen, setModalState] = useState(initialState);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  return {
    Modal,
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;

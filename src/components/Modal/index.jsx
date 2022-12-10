import { useContext } from 'react';
import Modal from 'react-modal';
import { TechContext } from '../../contexts/TechContext';

export const ModalComponent = () => {

    const { openModal, modalIsOpen, afterOpenModal, closeModal, customStyles } = useContext(TechContext)

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 /* ref={(_subtitle) => (subtitle = _subtitle)} */>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
  
  </div>
  );
};

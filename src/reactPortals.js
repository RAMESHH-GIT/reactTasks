import React, { useState } from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">{props.children}</div>
    </div>,
    document.body
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleButtonClick() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div>
      <h1>My App</h1>
      <button onClick={handleButtonClick}>Open Modal</button>
      {showModal && (
        <Modal>
          <h2>Modal Content</h2>
          <p>This is the content of the modal.</p>
          <button onClick={handleCloseModal}>Close Modal</button>
        </Modal>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
import React, { useState } from 'react';
import Modal from './Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>React Portals POC</h1>
      <button onClick={handleOpenModal}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2>This is a Modal</h2>
        <p>Modal content goes here...</p>
      </Modal>
    </div>
  );
};

export default App;
// import React from 'react';
// import ReactDOM from 'react-dom';

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return ReactDOM.createPortal(
//     <div className="modal">
//       <div className="modal-content">
//         {children}
//         <button className="close-button" onClick={onClose}>
//           Close
//         </button>
//       </div>
//     </div>,
//     document.getElementById('modal-root')
//   );
// };

// export default Modal;

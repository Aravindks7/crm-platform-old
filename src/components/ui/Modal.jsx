import "./Modal.css"; // Import the CSS file for animations
import PropTypes from "prop-types";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Modal Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
      {/* Modal Content with Animation */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-6xl w-full p-6 z-10 animate-modal">
        {/* Modal Body */}
        {children}
      </div>
    </div>
    
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;

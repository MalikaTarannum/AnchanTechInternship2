import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal (
    <>
      {isOpen && (
        <div className="grid place-items-center absolute top-0 h-screen w-screen z-45 backdrop-blur">
          
          <div className="m-auto min-h-[200px] min-w-[90%] bg-white p-4 relative z-50">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoIosCopy } from 'react-icons/io';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  code: number;
  onCopyCode: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, code, onCopyCode }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-lg h-full md:h-auto bg-white rounded-lg">
        <div className="flex justify-center items-center flex-col">
          <FaCheckCircle className="w-[60px] h-[60px]" />
          <div className="mt-[22px]">
            <p className="font-[700] text-[20px]">Quiz was successfully created</p>
          </div>
          <div className="flex justify-between items-center gap-4 mt-[10px] border-2 rounded-[20px]">
            <span className="bg-light_cream p-3 rounded-tl-[20px] rounded-bl-[20px] font-[700] text-[20px]">
              CODE:
            </span>
            <span className="font-[700] text-[20px]">{code}</span>
            <button className="px-5 text-xl" onClick={onCopyCode}>
              <IoIosCopy />
            </button>
          </div>
          <div className="mt-[44px]">
            <button
              className="bg-green px-14 py-2 rounded-[20px]"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;

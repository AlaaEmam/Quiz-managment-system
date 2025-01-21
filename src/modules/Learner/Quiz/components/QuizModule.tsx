import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
  }
const QuizModule:React.FC<ModalProps> = ({ isOpen, onClose, title }) => {
    if (!isOpen) return null;
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="text-center bg-white rounded-lg shadow-xl p-8 max-w-md mx-auto transition-transform transform scale-100">
        <div className="text-green-500 text-5xl mb-4">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <h2 className="text-xl font-bold text-center mb-4">Quiz joined successfully</h2>
        <p className="quiz-title mb-6">{title}</p>
        <button
            className="w-[150px] h-[40px] bg-[#C5D86D] text-black font-bold rounded-lg hover:bg-[#b4cb5a] transition-all duration-300"
            onClick={onClose}
        >
            Close
        </button>
    </div>
    </div>
  );
};

export default QuizModule;

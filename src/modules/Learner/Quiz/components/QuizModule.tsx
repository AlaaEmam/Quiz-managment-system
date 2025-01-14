import React from 'react';

const QuizModule = ({ onClose }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
      <div className="text-green-500 text-4xl mb-4">
        <i className="fa-solid fa-circle-check"></i>
      </div>

      <h2 className="quiz-success mb-4">Quiz joined successfully</h2>

      <p className="quiz-title mb-6">Database Fundamentals Quiz</p>

      <button
        className="w-[150px] h-[40px] bg-[#C5D86D] text-black font-bold rounded-lg hover:bg-[#b4cb5a] transition-all duration-300"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default QuizModule;

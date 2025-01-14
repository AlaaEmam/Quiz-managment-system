import React, { useState } from 'react';
import QuizModule from './QuizModule';

export default function Quiz() {
  const [showModule, setShowModule] = useState(false);

  const handleClose = () => {
    setShowModule(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!showModule ? (
        <button
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
          onClick={() => setShowModule(true)}
        >
          Start Quiz
        </button>
      ) : (
        <QuizModule onClose={handleClose} />
      )}
    </div>
  );
}

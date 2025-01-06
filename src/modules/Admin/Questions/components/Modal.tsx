import React from 'react';

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg pt-0 max-w-lg w-full">
        <div className='grid grid-cols-12 border-b-2'>
             <h2 className="text-lg font-bold col-span-8  border-r-2"> Set up a new question</h2>
                        <i className="fa-solid fa-check col-span-2  border-r-2 text-center px-2"></i>
                        <i className="fa-solid fa-xmark col-span-2 text-center px-2"></i>


        </div>

        <p className="mb-4  p-6 ">This is a simple modal example using Tailwind CSS.</p>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white rounded px-4 py-2"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
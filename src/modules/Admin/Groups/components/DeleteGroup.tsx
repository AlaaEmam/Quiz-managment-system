import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm, SubmitHandler } from 'react-hook-form'
import { axiosInstance, Groups } from '../../../../Constants/URLS/URL';

interface DeleteConfirmationProps {
  showDelete: boolean;
  handleCloseDelete: () => void; // Function to close the modal
  deleteItem: string; // Name of the item to delete
  deleteFunction: () => any; // Function to call the delete API
  isOpen:boolean;
}

const DeleteGroup: React.FC<DeleteConfirmationProps> = ({
  showDelete,
  handleCloseDelete,
  deleteItem,
  deleteFunction,
  isOpen,
}) => {
  const [groupList, setGroupList]=useState([]);
  

  const getGroups=async()=>{
    const response= await axiosInstance.get(Groups.getAll);
    setGroupList(response?.data)
    console.log(response.data);
  }
  



  return (
    <>
      <span>
        
        {isOpen && (
          <div 
            onClick={handleCloseDelete}
            className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className={`bg-white rounded-lg shadow-lg w-2/4 transition-transform transform duration-300 ${
                isOpen ? 'scale-100' : 'scale-95'
              }`}
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
              
            >
              <div className="flex justify-between border-b-2 p-2">
                <h2 className="text-xl font-semibold"> Delete this Group</h2>
                <div className="text-2xl">
                  <button
                    className="border-l-2 px-2"
                    onClick={deleteFunction}
                  >
                    <i className="bi bi-check-lg"></i>
                  </button>
                  <button
                    className="border-l-2 px-2"
                    onClick={handleCloseDelete}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>

              
              
            </div>
          </div>
        )}
      </span>
    </>
  );
}

export default DeleteGroup
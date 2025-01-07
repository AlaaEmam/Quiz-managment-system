import { useEffect, useState } from "react";
import { axiosInstance, Groups } from "../../../../Constants/URLS/URL";
import AddGroup from "./AddGroup";
import DeleteGroup from "./DeleteGroup";

export default function Group() {
  const [groupList, setGroupList]=useState([]);
  const [isOpen, setIsOpen] = useState(false);

  
  
  

  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const handleCloseDelete = () => setIsOpen(false);

  const handleShowDelete = (id: number) => {
    setSelectedId(id);
    setIsOpen(true);
  };

  

  const getGroups=async()=>{
    const response= await axiosInstance.get(Groups.getAll);
    setGroupList(response?.data)
    console.log(response.data);
  }
  

const deleteGroup=async()=>{
    try{
      const response=await axiosInstance.delete(Groups.deleteGroup(selectedId));
      console.log(response);
      getGroups();
      handleCloseDelete();
    }catch(error){
      console.log(error)
    }
  }



  useEffect(()=>{
    getGroups();

  },[])

  


  return (
  <div className="w-full">
      <DeleteGroup isOpen={isOpen} deleteItem={'Group'}
      handleCloseDelete={handleCloseDelete}
      showDelete={showDelete}
      deleteFunction={deleteGroup}></DeleteGroup>
      {/* <span>
        
        
        
        {isOpen && (
          <div 
            onClick={closeModal}
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
                    onClick={deleteGroup}
                  >
                    <i className="bi bi-check-lg"></i>
                  </button>
                  <button
                    className="border-l-2 px-2"
                    onClick={closeModal}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>

              
              
            </div>
          </div>
        )}
      </span> */}

    <div className="mt-2 p-10">

      <div className="flex justify-end">
        {/* Incomplete */}
       <AddGroup/>
      </div>
      <div className="border-2 mt-4 rounded-xl h-svh p-5">
        <h1 className="text-3xl">Group list</h1>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {groupList.map(group=>

            
          <div className="p-3 border-2 rounded-lg flex justify-between" key={group._id}>
            <div>
              <p className="text-2xl">Group: {group.name}</p>
              <p className="text-md">No. of Students: {group?.students.length}</p>
            </div>
            <div>
              <i className="bi bi-pencil-square text-3xl"></i>
              
              <i onClick={() => handleShowDelete(group?._id)} className="bi bi-trash text-3xl"></i>
        
            </div>
          </div>
          
        )}
        </div>
      </div>
    </div>
  </div>);
}
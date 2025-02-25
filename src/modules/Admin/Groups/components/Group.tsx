import { useEffect, useState } from "react";
import { axiosInstance, Groups, Student } from "../../../../Constants/URLS/URL";
import AddGroup from "./AddGroup";
import DeleteGroup from "./DeleteGroup";
import { toast } from "react-toastify";
import { SubmitHandler } from "react-hook-form";
import EditGroup from "./EditGroup";
import { Link } from "react-router-dom";
import DeleteConfirmation from "../../../Shared/DeleteConfirmation/DeleteConfirmation";
import NoData from "../../../Shared/NoData/NoData";


export default function Group() {
  const [groupList, setGroupList] = useState<any[]>([]); // Define type based on your data structure
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenAddGroup, setIsOpenAddGroup] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [groupData, setGroupData] = useState<any>(null);

  // Fetch group data
  const getGroups = async () => {
    try {
      const response = await axiosInstance.get(Groups.getAll);
      setGroupList(response?.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Add Group 
  const addNewGroup:SubmitHandler<FormData>=async(data:any)=>{
    try{
      const response=await axiosInstance.post(Groups.createGroup, data)
      getGroups()
      console.log(response);
      toast.success("New Group Added")
      handleCloseAddGroup();
    }catch(error){
      toast.error("Student already in group")
      
      console.log(error);
    }
  }
  // close Add Group 
  const handleCloseAddGroup=()=> setIsOpenAddGroup(false);
  // handle Show Add Group
  const handleShowAddGroup=()=>{
    setIsOpenAddGroup(true);
  }


  // Fetch a specific group to edit based on selectedId
  const getGroupById = async (id: string) => {
    try {
      const response = await axiosInstance.get(Groups.getById(id));
      setGroupData(response?.data); // Store the group data for editing
    } catch (error) {
      console.log(error);
    }
  };

  //Edit Group 
  const editGroup: SubmitHandler<FormData> = async (data: any) => {
    try {
      if (selectedId) {
        const response = await axiosInstance.put(Groups.updateGroup(selectedId), data);
        console.log("editGroup: ",response);
      } else {
        throw new Error("Selected ID is null");
      }
      toast.success("Edited Group");
      getGroups();
      handleCloseEditGroup();
    } catch (error) {
      toast.error("Edit Failed");
      console.log(error);
    }
  };

  // close Edit Group
  const handleCloseEditGroup = () => setIsOpenEdit(false);

  // handle show Edit Group
  const handleShowEditGroup = (id: string) => {
    setSelectedId(id);
    getGroupById(id); // Fetch the group data by ID
    setIsOpenEdit(true); // Show the edit modal
  };


  // Delete group
  const deleteGroup = async () => {
    try {
      const response = await axiosInstance.delete(Groups.deleteGroup(String(selectedId)));
      handleCloseDelete();
      getGroups();
      toast.success("You have deleted this group");
      console.log(response);
    } catch (error) {
      
      toast.error("delete failed");
      console.log(error);
    }
  };
  // Close Delete Group
  const handleCloseDelete = () => setIsOpenDelete(false);
  
  // Show Delete Group
  const handleShowDelete = (id: string) => {
    setSelectedId(id);
    setIsOpenDelete(true);
  };


  useEffect(() => {
    getGroups();
  }, []);

  return (
<>
      <EditGroup
        handleCloseEditGroup={handleCloseEditGroup}
        EditGroup={editGroup} // Ensure correct prop name
        isOpenEditGroup={isOpenEdit}
        groupData={groupData} // Pass groupData for editing
      />

    <div className="flex justify-between items-center space-x-2 mb-5">
        <h3 className="font-light text-gray-500">
        <Link to="/dashboard">  Dashboard </Link>
            / 
        <Link
            to="/results" // Adjust this route as needed
            className="font-normal text-gray-900 underline"
        >
            Groups List
        </Link>
        </h3>

        <button 
        onClick={handleShowAddGroup} 
        className="mr-10 border-2 p-2 px-5 rounded-full">
        <span className="px-2 ">
          <i className="bi bi-plus-circle-fill"></i>
        </span>  
        Add Group
      </button>
    </div>

     {groupList.length > 0 ? (
       <div className="mt-2 border-2 rounded-xl p-5">
       <div className="grid grid-cols-2 gap-2 ">
         {groupList.map((group: any) => (
           <div
             className="p-3 border-2 rounded-lg flex justify-between"
             key={group._id}
           >
             <div>
               <p className="text-2xl">Group: {group.name}</p>
               <p className="text-md">No. of Students: {group?.students.length}</p>
             </div>
             <div>
               <i onClick={() => handleShowEditGroup(group?._id)} className="bi bi-pencil-square text-3xl"></i>
               <i
                 onClick={() => handleShowDelete(group?._id)}
                 className="bi bi-trash text-3xl"
               ></i>
             </div>
           </div>
         ))}
       </div>
     </div>

     ) : (
      <div className="mt-2 border-2 rounded-xl p-5">
        <div className="text-center">
          <NoData />
        </div>
      </div>
     )
     }

  <AddGroup 
  handleCloseAddGroup={handleCloseAddGroup}
  AddNewGroup={addNewGroup}
  isOpenAddGroup={isOpenAddGroup}
  />
        
  <DeleteConfirmation
    deleteFun={deleteGroup}
    showModal={isOpenDelete}
    closeModal={handleCloseDelete}
    title="Group"
  />


</>
  );
}

// interface StudentData {
//   _id: string; 
//   first_name: string[];
// }

// interface FormData{
//   name:string;
//   students:string[];
// }
// // interface Option {
// //   value: string | number;
// //   label: string;
// // }

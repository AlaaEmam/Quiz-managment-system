import { useEffect, useState } from "react";
import { axiosInstance, Groups, Student } from "../../../../Constants/URLS/URL";
import AddGroup from "./AddGroup";
import DeleteGroup from "./DeleteGroup";
import { toast } from "react-toastify";
// import Select from "react-select";

// Interface for students (adjust to your API response structure)
interface StudentData {
  _id: string; // Assuming students have an id property
  first_name: string[];
}

// interface Option {
//   value: string | number;
//   label: string;
// }

export default function Group() {
  const [groupList, setGroupList] = useState<any[]>([]); // Define type based on your data structure
  const [isOpen, setIsOpen] = useState(false);
  const [students, setStudents] = useState<StudentData[]>([]); // State for students

  const [selectedId, setSelectedId] = useState<number | null>(null);
  // const [selectedStudentsOptions, setSelectedStudentsOptions] = useState<Option[]>([]); // State for selected options

  // Close Delete Dialog
  const handleCloseDelete = () => setIsOpen(false);

  // Show Delete Dialog
  const handleShowDelete = (id: number) => {
    setSelectedId(id);
    setIsOpen(true);
  };

  // Fetch students data
  const getStudents = async () => {
    try {
      const response = await axiosInstance.get(Student.getAll);
      console.log(response.data);
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch group data
  const getGroups = async () => {
    try {
      const response = await axiosInstance.get(Groups.getAll);
      setGroupList(response?.data);
      console.log(response.data);
      toast.success("You have deleted this group");
    } catch (error) {
      toast.error("delete failed");
      console.log(error);
    }
  };

  // Delete group
  const deleteGroup = async () => {
    try {
      const response = await axiosInstance.delete(Groups.deleteGroup(String(selectedId)));
      handleCloseDelete();
      getGroups();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch groups and students on component mount
  useEffect(() => {
    getGroups();
    getStudents();
  }, []);

  // Create student options for react-select
 
  // const studentOptions: Option[] = students.map((student) => ({
  //   value: student._id, // Use the student's ID as the value
  //   label: student.first_name, // Use the student's first name as the label
  // }));

  // Handle selection change for react-select (multiple selection)
  
  // function handleSelect(selectedOptions: any) {
  //   setSelectedStudentsOptions(selectedOptions); // Update selected students
  // }

  return (
    <div className="w-full">
      <DeleteGroup
        isOpen={isOpen}
        deleteItem={"Group"}
        handleCloseDelete={handleCloseDelete}
        deleteFunction={deleteGroup}
      />

      <div className="mt-2 p-10">
        <div className="flex justify-end">
          {/* Add Group */}
          <AddGroup />

          
        </div>

        <div className="border-2 mt-4 rounded-xl h-svh p-5">
          <h1 className="text-3xl">Group list</h1>
          <div className="grid grid-cols-2 gap-2 mt-4">
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
                  <i className="bi bi-pencil-square text-3xl"></i>
                  <i
                    onClick={() => handleShowDelete(group?._id)}
                    className="bi bi-trash text-3xl"
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
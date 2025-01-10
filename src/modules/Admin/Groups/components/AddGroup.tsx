import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { axiosInstance, Groups, Student } from '../../../../Constants/URLS/URL';
// import Select from "react-select";

interface FormData{
  name:string;
  students:string[];
}

interface AddGroupProps {
  handleCloseAddGroup: () => void; 
  AddGroup: () => any; 
  isOpenAddGroup:boolean;
}

// Interface for students (adjust to your API response structure)
interface StudentData {
  _id: string; // Assuming students have an id property
  first_name: string;
}

// interface Option {
//   value: string | number;
//   label: string;
// }

const AddGroup:React.FC<AddGroupProps>=({handleCloseAddGroup, AddNewGroup, isOpenAddGroup})=> {
  
  
  let { register, formState:{ errors}, handleSubmit}=useForm<FormData>({mode:'onChange'});
  
  
  const [students, setStudents] = useState<StudentData[]>([]); // State for students
  
  // const [selectedStudentsOptions, setSelectedStudentsOptions] = useState<Option[]>([]); // State for selected options
  
  

  
  // Fetch students data
  const getStudents = async () => {
    try {
      const response = await axiosInstance.get(Student.getAllWithoutgroup);
      console.log(response.data);
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };



   // Fetch groups and students on component mount
    useEffect(() => {
      
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
    <>
      <div>
       
        
        {isOpenAddGroup && (
          <div
            onClick={handleCloseAddGroup}
            className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${
              isOpenAddGroup ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <form
              className={`bg-white rounded-lg shadow-lg w-2/4 transition-transform transform duration-300 ${
                isOpenAddGroup ? 'scale-100' : 'scale-95'
              }`}
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
              onSubmit={handleSubmit(AddNewGroup)}
            >
              <div className="flex justify-between border-b-2 p-2">
                <h2 className="text-xl font-semibold"> Set up a new Group</h2>
                <div className="text-2xl">
                  <button
                    className="border-l-2 px-2"
                  >
                    <i className="bi bi-check-lg"></i>
                  </button>
                  <button
                    className="border-l-2 px-2"
                    onClick={handleCloseAddGroup}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>

              {errors?.name?.message &&<div className="text-gray-800">{errors?.name?.message}</div>}
              <div className="py-4 rounded-xl border-2 m-5 ">
                <span className="py-4 px-2 rounded-xl bg-orange-200 mr-4">
                  Group Name
                </span>
                
                <input className="border-2 xl:w-60 py-2 md:w-52" type='text'
                {...register("name", {required:"This Name is required"})}
                />
              </div>

              {errors?.students?.message &&<div className="text-gray-800">{errors?.students?.message}</div>}
              <div className="py-4 rounded-xl border-2 m-5 flex ">
                <span className="py-4 px-2 rounded-xl bg-orange-200 mr-4">
                  List Students
                </span>

                <select
                multiple
                  className="pl-28 rounded-lg w-full border border-black"
                  {...register("students", {
                    required: "fill the student list",
                  })}
                >
                  <option value="" disabled selected>
                    fill the student
                  </option>
                  {students.map((addStudents)=>(
                    <option value={addStudents._id} key={addStudents._id}>
                      {[addStudents.first_name]} 
                    </option>
                  ))}
                  </select>
                {/* <Select
                className='w-3/5'
            options={studentOptions}
            placeholder="Select students"
            value={selectedStudentsOptions} // Value is the selected options
            isSearchable={true}
            {...register("students",{required:"please fill the student list"})}
            isMulti // Enable multi-select
            onChange={handleSelect} // Handle selection change
          /> */}

                
                
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default AddGroup
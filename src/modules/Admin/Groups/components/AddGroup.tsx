import { useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form'
import { axiosInstance, Groups } from '../../../../Constants/URLS/URL';


interface FormData{
  name:string;
  students:[string];
}

interface ApiResponse{
  message: string;  
}



export default function AddGroup() {
  
  
  let { register, formState:{ errors}, handleSubmit}=useForm<FormData>({mode:'onChange'});
    
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [names, setNames] = useState<string[]>([]); // Initial state is an empty array


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Split the input by commas and remove any extra spaces, then update the state
    const nameArray = inputValue
      .split(',')
      .map(name => name.trim())  // Trim each name to remove spaces
      .filter(name => name.length > 0); // Filter out empty strings

    setNames(nameArray);
  };
  const onSubmitHandler:SubmitHandler<FormData>=async(data)=>{
    try{
      const response=await axiosInstance.post(Groups.createGroup, data)
      // toast.success("Category added");
      console.log(response);

    }catch(error){
      console.log(error)
    }
  }


  return (
    <>
      <div>
        <button 
          onClick={openModal} 
          className="mr-10 border-2 p-2 px-4 rounded-full">
          <span>
            <i className="bi bi-plus-circle-fill"></i>
          </span>  
          Add Group
        </button>
        
        {isOpen && (
          <div
            onClick={closeModal}
            className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <form
              className={`bg-white rounded-lg shadow-lg w-2/4 transition-transform transform duration-300 ${
                isOpen ? 'scale-100' : 'scale-95'
              }`}
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <div className="flex justify-between border-b-2 p-2">
                <h2 className="text-xl font-semibold"> Set up a new Group</h2>
                <div className="text-2xl">
                  <button
                    className="border-l-2 px-2"
                    type="submit"
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
              <div className="py-4 rounded-xl border-2 m-5 ">
                <span className="py-4 px-2 rounded-xl bg-orange-200 mr-4">
                  List Students
                </span>

                
                <input 
                className="border-2 xl:w-60 py-2 md:w-52" 
                type="text" 
                {...register("students", {required:"Please fill the list of students"})}
                 onChange={handleInputChange} 
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
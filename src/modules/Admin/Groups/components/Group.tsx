import { useEffect } from "react";
import { axiosInstance, Groups } from "../../../../Constants/URLS/URL";

export default function Group() {
  
  const getGroups=async()=>{
    const response= await axiosInstance.get(Groups.getAll);
    // console.log(response.data)
  }
  


  getGroups();

  
  return (
  <div className="w-full">
    <div className="mt-2 p-10">

      <div className="flex justify-end">
        <button className="mr-10 border-2 
        p-2 px-4 rounded-full">
        <span><i className="bi bi-plus-circle-fill"></i></span>  Add Group</button>
      </div>
      <div className="border-2 mt-4 rounded-xl h-svh p-5">
        <h1 className="text-3xl">Group list</h1>
        <div className="grid-cols-2">
          <div></div>
        </div>
      </div>
    </div>
  </div>);
}
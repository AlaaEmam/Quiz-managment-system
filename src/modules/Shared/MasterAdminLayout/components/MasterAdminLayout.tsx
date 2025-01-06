import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../SideBar/SideBar";
import { useState } from "react";

export default function MasterAdminLayout(){
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return(
    <>
      <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className=" ml-64 mt-96">
        <Outlet /> 
      </div>
    </div>
    </>
  )
}
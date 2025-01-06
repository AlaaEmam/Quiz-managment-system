import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useState } from "react";
import SideBar from "../../SideBar/Sidebar";

export default function MasterAdminLayout(){
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return(
    <>
      <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} />
      <div className=" ml-64 mt-24 p-4">
        <Outlet />
      </div>
    </div>
    </>
  );
}

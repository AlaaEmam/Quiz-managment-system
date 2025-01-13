import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import StudentSideBar from '../StudentSideBar/StudentSideBar';

export default function MasterUserLayout() {
  
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
 <>
       <div>
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="flex">
          <StudentSideBar isStudentSideBarOpen={isSidebarOpen} />
          <div className="w-full px-5 pt-5">
            <Outlet />
          </div>
        </div>
      </div>
    
 </>
  )
}

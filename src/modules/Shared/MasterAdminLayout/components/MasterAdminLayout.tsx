import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import SideBar from '../../Sidebar/Sidebar';

export default function MasterAdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div>
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="flex">
          <SideBar isSidebarOpen={isSidebarOpen} />
          <div className="w-full px-5 pt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

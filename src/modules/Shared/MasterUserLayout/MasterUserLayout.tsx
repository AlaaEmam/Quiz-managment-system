import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import StudentSideBar from '../StudentSideBar/StudentSideBar';

export default function MasterUserLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();
  const isJoinQuizPage = location.pathname === '/learner/join-quiz'; // Adjust the path as needed

  return (
    <>
      {!isJoinQuizPage ? ( // Only render the navbar and sidebar if not on the Join Quiz page
        <div>
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="flex">
            <StudentSideBar isStudentSideBarOpen={isSidebarOpen} />
            <div className="w-full px-5 pt-5">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <Outlet /> {/* This will render the JoinQuiz component */}
        </div>
      )}
    </>
  );
}
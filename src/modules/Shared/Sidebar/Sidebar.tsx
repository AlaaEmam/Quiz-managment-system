import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FaUsers, FaQuestionCircle, FaClipboardList } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { GoLog, GoPeople } from "react-icons/go";

interface SidebarProps {
  isSidebarOpen: boolean;
}

const SideBar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const location = useLocation(); // Get the current route to determine the active link

  const getLinkClassName = (path: string) => {
    const isActive = location.pathname === path;
    return `flex items-center p-6 text-gray-900 rounded-lg dark:text-white group transition-all duration-75 ${
      isActive
        ? "text-light_cream bg-slate-900 dark:bg-gray-600 shadow-md"
        : "hover:bg-slate-900 hover:text-light_cream"
    }`;
  };
  
  const getIconClassName = (path: string) => {
    return `text-2xl transition duration-75 ${
      location.pathname === path
        ? "text-light_cream dark:text-light_cream"
        : " text-light-cream dark:text-gray-400"
    }`;
  };
  
  return (
    <aside
    id="logo-sidebar"
    className={`sticky top-0 left-0 z-40 h-[88vh] transition-transform w-[15rem] overflow-y-auto ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
    aria-label="Sidebar"
  >
    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        {/* Sidebar Links */}
        <li className="py-2.5">
          <Link to="/dashboard" className={getLinkClassName("/dashboard")}>
            <MdDashboard className={getIconClassName("/dashboard")} />
            <span className="ms-3">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="group" className={getLinkClassName("/dashboard/group")}>
            <FaUsers className={getIconClassName("/dashboard/group")} />
            <span className="ms-3">Groups</span>
          </Link>
        </li>
        <li>
          <Link to="quiz" className={getLinkClassName("/dashboard/quiz")}>
            <FaClipboardList className={getIconClassName("/dashboard/quiz")} />
            <span className="ms-3">Quizzes</span>
          </Link>
        </li>
        <li>
          <Link to="results" className={getLinkClassName("/dashboard/results")}>
            <GoLog className={getIconClassName("/dashboard/results")} />
            <span className="ms-3">Results</span>
          </Link>
        </li>
        <li>
          <Link to="students" className={getLinkClassName("/dashboard/students")}>
            <GoPeople className={getIconClassName("/dashboard/students")} />
            <span className="ms-3">Students</span>
          </Link>
        </li>
        <li>
          <Link to="#" className={getLinkClassName("#")}>
            <FaQuestionCircle className={getIconClassName("#")} />
            <span className="ms-3">Help</span>
          </Link>
        </li>
      </ul>
    </div>
  </aside>
  
  );
};

export default SideBar;
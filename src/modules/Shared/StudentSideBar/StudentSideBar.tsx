import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FaUsers, FaQuestionCircle, FaClipboardList } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { GoLog } from "react-icons/go";
import { GoPeople } from "react-icons/go";

interface StudentSideBarProps {
  isStudentSideBarOpen: boolean;
}

const StudentSideBar: React.FC<StudentSideBarProps> = ({ isStudentSideBarOpen }) => {
  const location = useLocation(); // Get the current route to determine the active link

  return (
    <aside
      id="logo-StudentSideBar"
      className={`sticky top-0 left-0 z-40 h-[88vh] transition-transform w-[15rem] overflow-y-auto ${
        isStudentSideBarOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="StudentSideBar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {/* StudentSideBar Links */}
          <li>
            <Link
              to="/learner/home-page"
              className={`flex items-center p-6 text-gray-900 rounded-lg dark:text-white group transition-all duration-75 ${
                location.pathname === "/home-page"
                  ? "text-light_cream bg-slate-900 dark:bg-gray-600 shadow-md"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <FaClipboardList
                className={`text-2xl transition duration-75 ${
                  location.pathname === "/quiz"
                    ? "text-light_cream dark:text-light_cream"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              />
              <span className="ms-3">Quizzes</span>
            </Link>
          </li>
          <li>
            <Link
              to="/learner/student-results"
              className={`flex items-center p-6 text-gray-900 rounded-lg dark:text-white group transition-all duration-75 ${
                location.pathname === "/results"
                  ? "text-light_cream bg-slate-900 dark:bg-gray-600 shadow-md"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <GoLog
                className={`text-2xl transition duration-75 ${
                  location.pathname === "/results"
                    ? "text-light_cream dark:text-light_cream"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              />
              <span className="ms-3">Results</span>
            </Link>
          </li>

          <li>
            <Link
              to="/help"
              className={`flex items-center p-6 text-gray-900 rounded-lg dark:text-white group transition-all duration-75 ${
                location.pathname === "/help"
                  ? "text-light_cream bg-slate-900 dark:bg-gray-600 shadow-md"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <FaQuestionCircle
                className={`text-2xl transition duration-75 ${
                  location.pathname === "/help"
                    ? "text-light_cream dark:text-light_cream"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              />
              <span className="ms-3">Help</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default StudentSideBar;

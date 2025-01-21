import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createPortal } from "react-dom";  // Import createPortal
import LogoDark from "../../../assets/Logo-black.svg";
import NewQuiz from "../../../assets/icons/newquiz.svg";
import { useAppDispatch, useAppSelector } from "../../../redux";
import { removeTokenFromLocalStorage } from "../../../redux/componenets/utils/localStorageUtils";
import { clearToken } from "../../../redux/AuthSlice";

// Define types for props
interface NavbarProps {
  toggleSidebar: () => void;
}


const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const navigate = useNavigate()
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch()
  console.log("Logged in user:", user);
  
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogOut = () => {
    removeTokenFromLocalStorage()
    dispatch(clearToken())
    navigate("/login")
  }

  return (
    <nav className="  sticky h-[12vh] top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            {/* Mobile Sidebar Button */}
            <button
              onClick={toggleSidebar}
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>

            {/* Logo */}
            <Link to="#" className="flex ms-2 md:me-24">
              <img src={LogoDark} className="h-8 me-3" alt="Logo" />
            </Link>
          </div>

          {/* New Quiz Button */}
          <div className="flex items-center ms-3">
            <Link
              to={"/quiz"}
              type="button"
              className="mr-11 px-8 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
            >
              <img
                src={NewQuiz}
                alt="New Quiz Icon"
                className="text-gray-500 pr-4 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <div className="font-bold text-xl">New Quiz</div>
            </Link>

            {/* User Profile Dropdown */}
            <button
              onClick={toggleDropdown}
              className="flex items-center text-sm pe-1 border-l-2 font-medium text-gray-900 hover:text-blue-600 dark:hover:text-blue-500 md:me-0 dark:focus:ring-gray-700 dark:text-white"
              type="button"
            >
              <span className="sr-only">Open user menu</span>
              <div className="text-left px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div className="font-medium">{user?.email}</div>
                <div className="truncate text-green">{user?.role}</div>
              </div>
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown menu rendered with createPortal */}
            {isDropdownOpen &&
              createPortal(
                <div className="z-50 absolute top-16 right-3 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-medium">Pro User</div>
                    <div className="truncate">{user?.email}</div>
                  </div>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-2">
                    <a
                    onClick={handleLogOut}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>,
                document.body, // Render dropdown in the body for correct positioning
              )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

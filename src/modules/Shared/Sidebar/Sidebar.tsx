import { Link } from 'react-router-dom';
import Dashboard from '../../../assets/icons/Dashboard.svg';
import Quizzes from '../../../assets/icons/Quiz.svg';
import Results from '../../../assets/icons/Results.svg';
import Groups from '../../../assets/icons/Students.svg';
import Help from '../../../assets/icons/help.svg';

// Define types for props
interface SidebarProps {
  isSidebarOpen: boolean;
}

const SideBar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  return (
    <aside
      id="logo-sidebar"
      className={`sticky top-0 left-0 z-40  h-[88vh]  transition-transform w-[15rem] overflow-y-auto  ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {/* Sidebar Links */}
          <li>
            <Link
              to="#"
              className="flex items-center p-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                src={Dashboard}
                alt="Dashboard Icon"
                className="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="group"
              className="flex items-center p-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                src={Groups}
                alt="Groups Icon"
                className="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="ms-3">Groups</span>
            </Link>
          </li>
          <li>
            <Link
              to="/quiz"
              className="flex items-center p-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                src={Quizzes}
                alt="Quizzes Icon"
                className="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="ms-3">Quizes</span>
            </Link>
          </li>
          <li>
            <Link
              to="result"
              className="flex items-center p-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                src={Results}
                alt="Results Icon"
                className="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="ms-3">Results</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center p-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                src={Help}
                alt="Help Icon"
                className="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="ms-3">Help</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;

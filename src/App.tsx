import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Dashboard from './modules/Admin/Dashboard/components/Dashboard';
import Group from './modules/Admin/Groups/components/Group';
import Questions from './modules/Admin/Questions/components/Questions';
import Quizes from './modules/Admin/Quizes/components/Quizes';
import Students from './modules/Admin/Students/components/Students';
import ChangePassword from './modules/Auth/Change Password/components/ChangePassword';
import ForgotPassword from './modules/Auth/Forgot Password/components/ForgotPassword';
import Login from './modules/Auth/Login/components/Login';
import Register from './modules/Auth/Register/components/Register';
import ResetPassword from './modules/Auth/Reset password/components/ResetPassword';
import AuthLayout from './modules/Shared/AuthLayout/components/AuthLayouts';
import MasterAdminLayout from './modules/Shared/MasterAdminLayout/components/MasterAdminLayout';
import NotFound from './modules/Shared/NotFound/components/NotFound';
import QuizesDetails from './modules/Admin/Quizes/components/QuizesDetails';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
// import ProtectedRoute from './modules/Shared/ProtectedRoute/components/ProtectedRoute';

function App() {
  const Routes = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'forget-Password', element: <ForgotPassword /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'change-password', element: <ChangePassword /> },
      ],
    },
    {
      path: '',
      element: <MasterAdminLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'Questions', element: <Questions /> },
        { path: 'Group', element: <Group /> },
        { path: 'Quizes', element: <Quizes /> },
        { path: 'Quiz-details', element: <QuizesDetails/> },
        { path: 'Students', element: <Students /> },
        { path: 'Questions', element: <Questions/> },

      ],
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={Routes}></RouterProvider>
    </>
  );
}

export default App;

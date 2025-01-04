import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './modules/Shared/AuthLayout/components/AuthLayouts'
import NotFound from './modules/Shared/NotFound/components/NotFound'
import { Login } from './modules/Auth/Login/components/Login'
import Register from './modules/Auth/Register/components/Register'
import ForgotPassword from './modules/Auth/Forgot Password/components/ForgotPassword'
import ResetPassword from './modules/Auth/Reset password/components/ResetPassword'
import ChangePassword from './modules/Auth/Change Password/components/ChangePassword'
import { ToastContainer } from 'react-toastify'
import ProtectedRoute from './modules/Shared/ProtectedRoute/components/ProtectedRoute'
import DashBoard from './modules/Admin/Dashboard/components/Dashboard'
import { Group } from './modules/Admin/Groups/components/Group'
import Questions from './modules/Admin/Questions/components/Questions'
import { Quizes } from './modules/Admin/Quizes/components/Quizes'
import Students from './modules/Admin/Students/components/Students'
import MasterAdminLayout from './modules/Shared/MasterAdminLayout/components/MasterAdminLayout'


function App() {
  
  const Routes= createBrowserRouter([
    {
      path: "auth",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },

        { path: "forget-Password", element: <ForgotPassword /> },
        { path: "reset-password", element: <ResetPassword /> },

        { path: "change-password", element: <ChangePassword /> },
      ],
    },

    {
      path: "dashboard",
      element: (
        <ProtectedRoute loginData={loginData}>
          <MasterAdminLayout />
        </ProtectedRoute>
      ),
      errorElement: <NotFound />,
      children: [
        { index: true, element: <DashBoard /> },

        { path: "groups", element: <Group /> },

        { path: "questions", element: <Questions /> },

        { path: "booking-list", element: <Quizes/> },
        { path: "users-list", element: <Students /> },
      ],
    },

    
  ])

  return (
    <>
      <ToastContainer />
      <RouterProvider router={Routes}></RouterProvider>
    </>
  )
}

export default App

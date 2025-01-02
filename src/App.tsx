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


function App() {
  
  const Routes= createBrowserRouter([
    {
      path: "/",
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

    
  ])

  return (
    <>
      <ToastContainer />
      <RouterProvider router={Routes}></RouterProvider>
    </>
  )
}

export default App

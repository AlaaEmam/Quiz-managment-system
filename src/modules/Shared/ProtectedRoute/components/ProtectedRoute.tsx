import React, { ReactNode, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  loginData: any; // يمكن تحديد النوع بناءً على محتوى loginData
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  let navigate = useNavigate();

  const token = localStorage.getItem("token");
  // const isLoggedIn = token && loginData;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      setIsLoading(false);
    } else {
      navigate("/auth/login");
    }
  }, [token]);

  if (isLoading) {
    // return <>{children}</>; // Render children if user is logged in
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

import { jwtDecode } from 'jwt-decode';
import { createContext, ReactNode, useEffect, useState } from 'react';

// تعريف نوع البيانات الخاصة بـ AuthContext
interface LoginData {
  [key: string]: any; // يمكن استبداله بحقول محددة إذا كنت تعرف محتويات الـ token
  userId?: number;
  roles?: string[];
  userName?: string;
  userEmail?: string;
  userGroup?: string;
  imagePath?: any;
}

interface AuthContextProps {
  loginData: LoginData | null;
  saveLoginData: () => void;
}
interface AuthContextProviderProps {
  children: ReactNode;
}

// توفير نوع افتراضي للـ Context
export const AuthContext = createContext<AuthContextProps | null>(null);

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [loginData, setLoginData] = useState<LoginData | null>(null);

  const saveLoginData = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode<LoginData>(token);
      console.log('Decoded Token:', decodedToken); // Check the contents
      setLoginData(decodedToken);
      // console.log(decodedToken)
    } else {
      console.log('No token found');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      saveLoginData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loginData, saveLoginData }}>
      {children}
    </AuthContext.Provider>
  );
}

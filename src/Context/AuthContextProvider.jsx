import { useMediaQuery } from "@chakra-ui/react";
import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(()=>{
    const auth = sessionStorage.getItem('auth');
    return auth?JSON.parse(auth):null;
  });
  const [isTablet] = useMediaQuery("(max-width: 768px)")
  useEffect(()=>{
    sessionStorage.setItem('auth', JSON.stringify(isAuth))
  }, [isAuth])
  return (
    <AuthContext.Provider value={{ isAuth, setAuth, isTablet }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

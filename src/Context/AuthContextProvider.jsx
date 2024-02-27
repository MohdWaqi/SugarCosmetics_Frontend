import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(()=>{
    const auth = sessionStorage.getItem('auth');
    return auth?JSON.parse(auth):null;
  });
  useEffect(()=>{
    sessionStorage.setItem('auth', JSON.stringify(isAuth))
  }, [isAuth])
  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

import React, { createContext, useState } from 'react'
export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
  const [isAuth, setAuth] = useState(true)
  return (
    <AuthContext.Provider value={{isAuth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
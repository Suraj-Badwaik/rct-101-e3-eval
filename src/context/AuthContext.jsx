import React, { createContext, useState } from "react";



export const AuthContext = createContext();

 const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const HandleLogin = ({username,password}) => {
      if(username=="username" && password=="1234"){
          setIsAuth(true)
      }
      else{
          alert('Login Failed')
      }
  }

  const HandleLogout = () => {
    setIsAuth(false)
  }

  return <AuthContext.Provider value={{isAuth, HandleLogin, HandleLogout}}>{children}</AuthContext.Provider>;
};

export default AuthProvider
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

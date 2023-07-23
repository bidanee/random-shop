import { Navigate, Outlet } from "react-router";
import { user } from "../firebase/firebaseSetup";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../service/atoms";

const ProtectedRoute = () => {
  const [isLogin] = useRecoilState(loginState);

  return isLogin ? <Outlet /> : <Navigate to={"/"} />;
};
export default ProtectedRoute;

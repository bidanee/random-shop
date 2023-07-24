import { Outlet } from "react-router";

import { Link } from "react-router-dom";

const ProtectedRoute = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("login"));

  return isLoggedIn ? <Outlet /> : <Link to={"/"} />;
};
export default ProtectedRoute;

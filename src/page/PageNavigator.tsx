import { Route, Routes } from "react-router";
import SignUp from "./SignUpPage";
import Login from "./LoginPage";
import MainPage from "./MainPage";

const PageNavigator = () => {
  return (
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/logIn" element={<Login />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default PageNavigator;

import { RecoilRoot } from "recoil";
import { Route, Routes } from "react-router-dom";
import Main from "./page/MainPage";
import SignUp from "./page/SignUpPage";
import Login from "./page/LoginPage";
import Cart from "./page/CartPage";
import MyPage from "./page/MyPage";
import ChoiceItem from "./page/ChoiceItemPage";
import DetailItem from "./page/DetailPage";
import { Suspense } from "react";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/Provide";
import LoadingSpinner from "./components/Common/LoadingSpinner";
import Header from "./components/Common/header/Header";

function App() {
  return (
    <RecoilRoot>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/main" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/choice" element={<ChoiceItem />} />
            <Route path="/fooditem/:id" element={<DetailItem />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </RecoilRoot>
  );
}

export default App;

import { RecoilRoot } from "recoil";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Main from "./page/MainPage";
import SignUp from "./page/SignUpPage";
import Login from "./page/LoginPage";
import Cart from "./page/CartPage";
import MyPage from "./page/MyPage";
import ChoiceItem from "./page/ChoiceItemPage";
import DetailItem from "./page/DetailPage";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseSetup";
import Footer from "./components/Footer";

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <section>
          <Routes>
            <Route path="/" element={currentUser ? <Main /> : <Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logIn" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/choice" element={<ChoiceItem />} />
            <Route path="/fooditem/:id" element={<DetailItem />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

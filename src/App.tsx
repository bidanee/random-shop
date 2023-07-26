import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/MainPage";
import SignUp from "./page/SignUpPage";
import Login from "./page/LoginPage";
import Cart from "./page/CartPage";
import MyPage from "./page/MyPage";
import ChoiceItem from "./page/ChoiceItemPage";
import DetailItem from "./page/DetailPage";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import firebase from "./firebase/firebaseSetup";
import Header from "./components/Common/header/Header";
import GlobalStyles from "./styles/GlobalStyle";
import { auth } from "./firebase/firebaseSetup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState<firebase.User | null>(null);
  useEffect(() => {
    const authChange = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
    });
    return authChange;
  }, []);
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Main /> : <Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mypage" element={<MyPage userObj={userObj} />} />
          <Route path="/choice" element={<ChoiceItem />} />
          <Route path="/fooditem/:id" element={<DetailItem />} />
        </Routes>

        <Footer />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

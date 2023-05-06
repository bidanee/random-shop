import { RecoilRoot } from "recoil";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Main from "./page/MainPage";
import SignUp from "./page/SignUpPage";
import Login from "./page/LoginPage";
import Cart from "./page/CartPage";
import MyPage from "./page/MyPage";
import ChoiceItem from "./page/ChoiceItemPage";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <section>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logIn" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/choice" element={<ChoiceItem />}></Route>
          </Routes>
        </section>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

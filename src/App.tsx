import { RecoilRoot } from "recoil";

import { BrowserRouter } from "react-router-dom";
import PageNavigator from "./page/PageNavigator";
import Header from "./components/Header";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <PageNavigator />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

import ReactDOM from "react-dom/client";

import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./firebase/AuthProvider.js";
import GlobalStyles from "./styles/GlobalStyle.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <RecoilRoot>
      <GlobalStyles />
      {/* <AuthProvider> */}
      <App />
      {/* </AuthProvider> */}
    </RecoilRoot>
  </BrowserRouter>
);

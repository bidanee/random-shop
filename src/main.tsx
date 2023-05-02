import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./GlobalStyle.ts";
import { AuthProvider } from "./firebase/AuthProvider.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <GlobalStyles />
    <AuthProvider>
      <App />
    </AuthProvider>
  </>
);

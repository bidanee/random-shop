import { User, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./firebaseSetup";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
        setIsLogin(true);
        localStorage.setItem(
          "user",
          JSON.stringify({
            uid: user.uid,
            displayName: user.displayName,
            wish: [],
          })
        );
      } else {
        setCurrentUser(null);
        setIsLogin(false);
        localStorage.removeItem("login");
        localStorage.removeItem("user");
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

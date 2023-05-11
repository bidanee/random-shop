import { User, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./firebaseSetup";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        setIsLogin(true);
        // localStorage.setItem(
        //   "user",
        //   JSON.stringify({
        //     uid: user.uid,
        //     displayName: user.displayName,
        //     email: user.email,
        //   })
        // );
      } else {
        setCurrentUser(null);
        setIsLogin(false);
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

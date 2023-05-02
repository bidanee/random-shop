import { User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./firebaseSetup";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
    return unsubscribe;
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

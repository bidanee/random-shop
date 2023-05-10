import { User, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "./firebaseSetup";
import { AuthContext } from "./AuthContext";
import { DocumentData, doc, getDoc } from "firebase/firestore";

/* export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      setIsLoggedIn(!!currentUser);
      if (currentUser) {
        const token = await currentUser.getIdToken();
        setToken(token);
        const userRef = doc(db, "users", currentUser.uid); // uid를 문서 이름으로 사용
        const userDoc: DocumentData = await getDoc(userRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.log("No such document!");
        }
      } else {
        setToken("");
        setUserData(null);
      }
    });
  }, []);
  const login = async (user:any) => {
    try {
      setUser(user);
      const token = await user.getIdToken();
      setToken(token);
      const userRef = doc(db, "users", user.uid);
      const userDoc: DocumentData = await getDoc(userRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        alert(`${user.displayName || userData.userId} 님 환영합니다`);
        setUserData(userDoc.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, isLoggedIn, token, userData, login }}
    >
      {children}
    </AuthContext.Provider>
  );
}; */

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      console.log(user);
      if (user) {
        setCurrentUser(user);
        setIsLogin(true);
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

import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  User,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "firebase/database";
import { auth, db } from "./firebaseSetup";

export interface UserWithProfile extends User {
  name: string;
}

export const signUp = async (
  email: string,
  password: string,
  displayName: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const userData = {
      nickname: user.displayName || displayName,
    };
    const newUser = doc(db, "users", user.uid);
    await setDoc(newUser, userData, { merge: true });
    await signOut(auth);
  } catch (error: any) {
    const errorMessage = error.message;
    if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
      alert("이미 사용중인 아이디입니다.");
    }
  }
};

export const isDuplicateNickName = async (
  nickname: string
): Promise<boolean> => {
  try {
    const users = collection(db, "users");
    const q = query(users, where("nickname", "==", nickname));
    const user = await getDocs(q);
    return !user.empty;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch(() => {
      alert("아이디와 비밀번호를 확인하세요");
    });
};

export const persistenceLogin = (email: string, password: string) => {
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

const provider = new GoogleAuthProvider();
export const loginGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const userData = {
        name: user.displayName,
      };
      const newUser = doc(db, "users", user.uid);
      setDoc(newUser, userData, { merge: true });
      return user.uid;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logout = () => {
  signOut(auth);
};

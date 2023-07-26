import firebase from "firebase/compat";

export interface ValidationFormProps {
  readonly email: string;
  readonly nickName: string;
  readonly pw: string;
  readonly checkPw: string;
}

export interface UserObjProps {
  userObj: firebase.User | null;
}

import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: null,
  dangerouslyAllowMutability: true,
});

export const loginState = atom({
  key: "loginState",
  default: false,
});

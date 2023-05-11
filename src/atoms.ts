import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const authState = atom({
  key: "authState",
  default: null,
  dangerouslyAllowMutability: true,
});

const { persistAtom } = recoilPersist({
  key: "login",
  storage: localStorage,
});
export const loginState = atom({
  key: "loginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
export const nickNameState = atom({
  key: "nickName",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

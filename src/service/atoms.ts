import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { itemProps } from "../page/ChoiceItemPage";

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
  key: "login",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
export const displayNameState = atom({
  key: "displayName",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const WishState = atom({
  key: "wish",
  default: false,
  dangerouslyAllowMutability: true,
});

export const CartState = atom({
  key: "cart",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
export const DayCountState = atom({
  key: "dayCount",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const CountState = atom({
  key: "count",
  default: 0,
});

export const ItemsState = atom({
  key: "itmes",
  default: [],
});

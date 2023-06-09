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
  key: "loginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
export const nickNameState = atom({
  key: "nickName",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const Wishstate = atom({
  key: "Wish",
  default: false,
});

export const CartState = atom({
  key: "cart",
  default: false,
});
export const DayCountState = atom({
  key: "count",
  default: 0,
});

export const itemList = selector<itemProps[]>({
  key: "ItemList",
  get: async () => {
    try {
      const res = await fetch("http://localhost:5173/data/itemData.json");
      return await res.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  },
});

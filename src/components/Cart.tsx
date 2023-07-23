import { useEffect, useState } from "react";

import itemData from "../../public/data/itemData.json";
import { useLocation, useNavigate } from "react-router-dom";
import { itemProps } from "../page/ChoiceItemPage";

const CartBtn = () => {
  const [items, setItems] = useState<itemProps[]>([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const item = items.filter((i) => i.id === Number(id));
  const detail = item[0];
  const UserId = JSON.parse(localStorage.getItem("user")).email;
  const cart = JSON.parse(localStorage.getItem(`${UserId}.cart`)) || [];
  const navigation = useNavigate();
  useEffect(() => {
    setItems(itemData);
  }, []);
  const onClickCart = (id: number) => {
    cart.push(id);
    localStorage.setItem(`${UserId}.cart`, JSON.stringify(cart));
    if (confirm("장바구니에 담았습니다. 장바구니로 가시겠습니까?") === true) {
      navigation("/cart");
    }
  };
  useEffect(() => {
    setItems(itemData);
  }, []);

  return <button onClick={() => onClickCart(detail.id)}>장바구니 담기</button>;
};
export default CartBtn;

import { useEffect, useState } from "react";
import {
  PageContainer,
  PageMainContainer,
} from "../styledComponents/PageStyled";
import { Link } from "react-router-dom";
import { itemProps } from "./ChoiceItemPage";
import itemData from "../../public/data/itemData.json";
import { Img } from "../styledComponents/CardStyled";

const Cart = () => {
  const [items, setItems] = useState<itemProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const UserId = JSON.parse(localStorage.getItem("user")).email;
  const getCartList = JSON.parse(localStorage.getItem(`${UserId}.cart`));
  const newCart = Array.from(new Set(getCartList));
  const [count, setCount] = useState<number>(getCartList.length);
  useEffect(() => {
    setItems(itemData);
  }, [getCartList]);
  const MinusBtn = (id: number) => {
    getCartList.splice(getCartList.indexOf(id), 1);
    setCount(count - 1);
    localStorage.setItem(`${UserId}.cart`, JSON.stringify(getCartList));
  };
  const PlusBtn = (id: number) => {
    getCartList.push(id);
    setCount(count + 1);
    localStorage.setItem(`${UserId}.cart`, JSON.stringify(getCartList));
  };
  //count

  const total = () => {
    const arr: Array<any> = [];
    newCart.map((id) =>
      items.map((item) => {
        if (item.id === id) {
          return arr.push(item);
        }
      })
    );
    const totalPrice: Array<any> = [];
    arr.map((item) =>
      totalPrice.push(
        getCartList.filter((i: number) => i === item.id).length * item.price
      )
    );
    return totalPrice;
  };
  const TotalPrice = total()?.reduce((a, b) => a + b, 0);
  return (
    <PageContainer>
      <PageMainContainer>
        <div>
          {newCart.length > 0 ? <div>장바구니에 담긴 상품</div> : null}
          {newCart.length > 0 ? (
            newCart.map((id) =>
              items.map((item) => {
                if (item.id === id) {
                  return (
                    <div key={item.id}>
                      <div>
                        <Img src={item.image} />
                        <div>
                          <h2>{item.name}</h2>
                          <p>
                            {item.price *
                              getCartList.filter((i: number) => i === item.id)
                                .length}
                            원
                          </p>
                          <div>
                            <button onClick={() => MinusBtn(item.id)}>-</button>
                            <p>
                              {
                                getCartList.filter((i: number) => i === item.id)
                                  .length
                              }
                            </p>
                            <button onClick={() => PlusBtn(item.id)}>+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            )
          ) : (
            <div>
              <h1>장바구니에 물품이 없습니다.</h1>
              <Link to={"/choice"}>담으러 가기</Link>
            </div>
          )}
          {newCart.length > 0 ? (
            <div>
              <span>총 {TotalPrice}원</span>
              <button>구매하기</button>
            </div>
          ) : null}
        </div>
        {isOpen ? (
          <div>
            <div>
              <h3>정말로 구매하시겠습니까?</h3>
              {/* localstorage에서 삭제 */}
              <button onClick={() => setIsOpen(false)}>구매하기</button>
              <button onClick={() => setIsOpen(false)}>취소</button>
            </div>
          </div>
        ) : null}
      </PageMainContainer>
    </PageContainer>
  );
};
export default Cart;

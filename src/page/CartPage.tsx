import { useEffect, useState } from "react";
import {
  BtnContainer,
  Button,
  CartImg,
  CartItemContainer,
  CartList,
  CartPageContainer,
  CartTitle,
  DetailBox,
  GoBtn,
  ItemBox,
  ItemInfoP,
  NoCart,
  NotIn,
  PageContainer,
  PageMainContainer,
  PriceContainer,
  Total,
  TotalContainer,
} from "../styledComponents/PageStyled";
import itemData from "../../public/data/itemData.json";
import { itemProps } from "./ChoiceItemPage";

const Cart = () => {
  const [items, setItems] = useState<itemProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const userId = JSON.parse(localStorage.getItem("user")).email;
  const getCartList = JSON.parse(localStorage.getItem(`${userId}.cart`));
  const newCart = Array.from(new Set(getCartList));
  const [count, setCount] = useState<number>(getCartList?.length);
  useEffect(() => {
    setItems(itemData);
  }, [getCartList]);
  const MinusBtn = (id: number) => {
    getCartList.splice(getCartList.indexOf(id), 1);
    setCount(count - 1);
    localStorage.setItem(`${userId}.cart`, JSON.stringify(getCartList));
  };
  const PlusBtn = (id: number) => {
    getCartList.push(id);
    setCount(count + 1);
    localStorage.setItem(`${userId}.cart`, JSON.stringify(getCartList));
  };
  //count

  const total = () => {
    const arr: Array<any> = [];
    newCart?.map((id) =>
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
        <CartPageContainer>
          {newCart && newCart.length > 0 ? (
            <CartTitle>장바구니에 담긴 상품</CartTitle>
          ) : null}
          <CartItemContainer>
            <CartList>
              {newCart && newCart.length > 0 ? (
                newCart.map((id) =>
                  items.map((item) => {
                    if (item.id === id) {
                      return (
                        <ItemBox key={item.id}>
                          <CartImg src={item.image} />
                          <DetailBox>
                            <ItemInfoP>{item.name}</ItemInfoP>
                            <ItemInfoP>
                              {item.price *
                                getCartList.filter((i: number) => i === item.id)
                                  .length}
                              원
                            </ItemInfoP>
                            <BtnContainer>
                              <Button onClick={() => MinusBtn(item.id)}>
                                -
                              </Button>
                              <p>
                                {
                                  getCartList.filter(
                                    (i: number) => i === item.id
                                  ).length
                                }
                              </p>
                              <Button onClick={() => PlusBtn(item.id)}>
                                +
                              </Button>
                            </BtnContainer>
                          </DetailBox>
                        </ItemBox>
                      );
                    }
                  })
                )
              ) : (
                <NoCart>
                  <NotIn>장바구니에 물품이 없습니다.</NotIn>
                  <GoBtn to={"/choice"}>담으러 가기</GoBtn>
                </NoCart>
              )}
            </CartList>
            {newCart.length > 0 ? (
              <TotalContainer>
                <PriceContainer>
                  <Total>총</Total>
                  <span>{TotalPrice}원</span>
                </PriceContainer>
                <button>구매하기</button>
              </TotalContainer>
            ) : null}
          </CartItemContainer>
        </CartPageContainer>
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

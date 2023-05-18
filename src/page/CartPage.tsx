import { useState } from "react";
import {
  PageContainer,
  PageMainContainer,
} from "../styledComponents/PageStyled";
import { Link } from "react-router-dom";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <PageContainer>
      <PageMainContainer>
        <div>
          {cartItems.length > 0 ? (
            cartItems.map((cart) => {
              const data: any = cart || {};
              return (
                <div key={cart.id}>
                  <div>장바구니에 담긴 상품</div>
                  <div>
                    <img />
                    <div>
                      <h2>상품명</h2>
                      <p>가격</p>
                      <div>
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span>총 : 0 원</span>
                    <button type="button" onClick={() => setIsOpen(true)}>
                      구매하기
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <h1>장바구니에 물품이 없습니다.</h1>
              <Link to={"/choice"}>담으러 가기</Link>
            </div>
          )}
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

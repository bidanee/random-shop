import styled from "styled-components";
import {
  PageContainer,
  PageMainContainer,
} from "../styledComponents/PageStyled";

const MypageList = styled.div`
  display: flex;
`;
const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 26px;
  font-weight: 700;
`;
const DashBoard = styled.div`
  display: flex;
`;
const Me = styled.ul``;

const MyPage = () => {
  return (
    <PageContainer>
      <PageMainContainer>
        <div>
          <MypageList>
            <div>
              <Title>마이페이지</Title>
              <Me>
                <li>개인정보</li>
                <li>주문내역</li>
                <li>위시리스트</li>
              </Me>
            </div>
            <DashBoard>
              <div>상품 후기</div>
              <div>적립금</div>
              <div>쿠폰</div>
            </DashBoard>
            <div>내용</div>
          </MypageList>
        </div>
      </PageMainContainer>
    </PageContainer>
  );
};

export default MyPage;

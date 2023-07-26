import styled from "styled-components";
import {
  PageContainer,
  PageMainContainer,
} from "../styledComponents/PageStyled";
import itemData from "../../public/data/itemData.json";
import { useEffect, useState } from "react";
import { itemProps } from "./ChoiceItemPage";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { WishState } from "../service/atoms";
import { UserObjProps } from "../interface/member/interface";
import tw from "twin.macro";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`;
const MypageList = styled.div`
  width: 45rem;
  padding: 1rem;
  background-color: #f8f1f1;
  border-radius: 20px;
`;
const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 26px;
  font-weight: 700;
  color: #025464;
`;
const DashBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Me = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wish = styled.h3`
  font-size: 1.2rem;
  color: #025464;
  text-align: center;
`;
const Hr = styled.hr`
  border: 1px solid #025464;
  margin: 0 0 7px 0;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
const WishContainer = styled.div`
  ${tw`h-fit`}
  display: flex;
  width: 40rem;
  flex-wrap: wrap;
  padding: 0.5rem 3.1rem;
`;
const ItemContainer = styled.div`
  margin: 0.5rem;
  width: 10.15rem;
  height: 13rem;
  border-radius: 1rem;
  border: 1px solid #025464;
`;
const Img = styled.img`
  width: 10rem;
  height: 10rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;
const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
`;
const Name = styled(Link)`
  color: #025464;
  text-align: center;
  font-size: 1rem;
  font-weight: bolder;
`;
const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.2rem;
  height: 1.2rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 1rem;
`;
const MyPage = ({ userObj }: UserObjProps) => {
  const [items, setItems] = useState<itemProps[]>([]);
  const [wish, setWish] = useRecoilState(WishState);
  const [wishList, setWishList] = useState(null);
  const userId = JSON.parse(localStorage.getItem("user")).email;
  const baskets = JSON.parse(localStorage.getItem(userId));

  const onDelBtnClick = (boardEl: string) => {
    if (confirm("삭제 하시겠습니까?") === true) {
      baskets.splice(baskets.indexOf(boardEl), 1);
      setWish(false);
      setWishList(baskets);
    }
    localStorage.setItem(userId, JSON.stringify(baskets));
  };
  useEffect(() => {
    setItems(itemData);
    setWishList(baskets);
  }, [wish]);

  return (
    <PageContainer>
      <PageMainContainer>
        <Container>
          <MypageList>
            <Title>MyPage</Title>
            <Hr />
            <DashBoard>
              <Me>
                <Wish>{userObj?.displayName}'s WishList</Wish>
                <Wrap>
                  <WishContainer>
                    {wishList && wishList.length > 0 ? (
                      wishList.map((item: string) =>
                        items.map((i) => {
                          if (item === i.name) {
                            return (
                              <ItemContainer key={i.id}>
                                <Img src={i.image} />
                                <Hr />
                                <NameContainer>
                                  <Name to={`/fooditem/${i.id}`}>{i.name}</Name>
                                  <DeleteBtn
                                    onClick={() => onDelBtnClick(i.name)}
                                  >
                                    X
                                  </DeleteBtn>
                                </NameContainer>
                              </ItemContainer>
                            );
                          }
                        })
                      )
                    ) : (
                      <div className="p-3 flex w-full h-96 justify-center items-center text-3xl">
                        <p>담긴 상품이 없습니다.</p>
                      </div>
                    )}
                  </WishContainer>
                </Wrap>
              </Me>
            </DashBoard>
          </MypageList>
        </Container>
      </PageMainContainer>
    </PageContainer>
  );
};

export default MyPage;

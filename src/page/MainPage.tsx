import Slider from "../components/Slider";
import { PageContainer } from "../styledComponents/PageStyled";
import itemData from "../../public/data/itemData.json";
import {
  CardContainer,
  DescDiv,
  FillHeartICon,
  HeartICon,
  Img,
  ItemCard,
  ItemContainer,
  ItemP,
  List,
  Title,
} from "../styledComponents/CardStyled";
import { useEffect, useState } from "react";
import { itemProps } from "./ChoiceItemPage";
import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import { Wishstate } from "../service/atoms";
import styled from "styled-components";

const Main = () => {
  const [items, setItems] = useState<itemProps[]>([]);

  const LikeItem = items.filter((i) => {
    return i.like === true;
  });
  //wishItem
  const UserId = JSON.parse(localStorage.getItem("user")).email;
  const baskets = JSON.parse(localStorage.getItem(`${UserId}.baskets`)) || [];
  const [wish, setWish] = useRecoilState(Wishstate);
  useEffect(() => {
    setItems(itemData);
  }, [wish]);
  const onClickWish = (boardEl: string) => {
    if (!baskets.includes(boardEl)) {
      baskets.push(boardEl);
      setWish(true);
    } else {
      baskets.splice(baskets.indexOf(boardEl), 1);
      setWish(false);
    }
    localStorage.setItem(`${UserId}.baskets`, JSON.stringify(baskets));
  };

  return (
    <PageContainer>
      <Slider />
      <List>
        <ItemContainer>
          <Title>LIKE ITEM</Title>
          <CardContainer>
            {LikeItem?.map((item) => (
              <div key={item.id}>
                <ItemCard>
                  <Link to={`/fooditem/${item.id}`}>
                    <Img src={item.image} />
                  </Link>
                  <DescDiv>
                    <div>
                      <ItemP>{item.name}</ItemP>
                      <ItemP>{item.price} 원</ItemP>
                    </div>
                    <div>
                      {baskets.includes(item.name) ? (
                        <ItemP onClick={() => onClickWish(item.name)}>
                          <FillHeartICon
                            size={24}
                            onClick={() => setWish(!wish)}
                          />
                        </ItemP>
                      ) : (
                        <ItemP onClick={() => onClickWish(item.name)}>
                          <HeartICon size={24} onClick={() => setWish(!wish)} />
                        </ItemP>
                      )}
                    </div>
                  </DescDiv>
                </ItemCard>
              </div>
            ))}
          </CardContainer>
        </ItemContainer>
      </List>
      <RandomContainer>
        <RandomDiv>
          <GoChoicePage to={"/choice"}>
            오늘 뭐먹지 고민하지말고 랜덤 선택하러 Go
          </GoChoicePage>
        </RandomDiv>
      </RandomContainer>
    </PageContainer>
  );
};
export const RandomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  padding: 3rem;
  border: 2px solid #3ded97;
  border-radius: 1rem;
  background-color: rgb(0 248 111 / 42%);
`;
export const RandomContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 3rem 0;
`;
export const Comment = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;
export const GoChoicePage = styled(Link)`
  margin-top: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  :hover {
    color: #3ded97;
  }
`;

export default Main;

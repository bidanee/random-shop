import { useEffect, useState } from "react";
import {
  List,
  ItemContainer,
  Title,
  CardContainer,
  ItemCard,
  Img,
  DescDiv,
  FillHeartICon,
  HeartICon,
  ItemInfo,
  ItemP,
} from "../styledComponents/CardStyled";
import { CategoryCheck } from "../components/CategoryCheck";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Wishstate } from "../service/atoms";
import styled from "styled-components";
export interface itemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  new: boolean;
  desc: string;
  category: string;
  like: boolean;
}
[];

const ChoiceItem = () => {
  const [items, setItems] = useState<itemProps[]>([]);
  const UserId = JSON.parse(localStorage.getItem("user")).email;
  const baskets = JSON.parse(localStorage.getItem(`${UserId}.baskets`)) || [];
  const [wish, setWish] = useRecoilState(Wishstate);
  useEffect(() => {
    fetch("http://localhost:5173/data/itemData.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
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

  const FilterItem = items.filter((item) => item.new === true);
  return (
    <List>
      <ItemContainer>
        <Title>NEW ITEM</Title>
        <CardContainer>
          {FilterItem.map((item) => (
            <div key={item.id}>
              <ItemCard>
                <Link to={`/fooditem/${item.id}`}>
                  <Img src={item.image} />
                </Link>
                <DescDiv>
                  <ItemInfo>
                    <ItemP>{item.name}</ItemP>
                    <ItemP>{item.price} 원</ItemP>
                  </ItemInfo>
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
      <Wrap>
        <Container>
          <GoWish to={"/myPage"}>위시리스트에서 선택하기</GoWish>
          <CategoryCheck />
        </Container>
      </Wrap>
    </List>
  );
};
const GoWish = styled(Link)`
  text-align: center;
  padding: 0.5rem;
  color: white;
  font-weight: bolder;
  background-color: #49d69b;
  margin: 1rem 0;
  border-radius: 1rem;
  width: 12rem;
`;
const Container = styled(CardContainer)`
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
`;
const Wrap = styled.div`
  width: 100%;
`;
export default ChoiceItem;

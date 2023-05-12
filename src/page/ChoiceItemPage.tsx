import { useEffect, useState } from "react";
import {
  List,
  ItemContainer,
  Title,
  CardContainer,
  ItemCard,
  Img,
} from "../styledComponents/CardStyled";
import { Modal } from "../components/DetailItemModal";
import { CategoryCheck } from "../components/CategoryCheck";
export interface itemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  new: boolean;
}
[];

const ChoiceItem = () => {
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 9;
  const offset = (page - 1) * limit;
  const [items, setItems] = useState<itemProps[]>([]);
  useEffect(() => {
    fetch("http://localhost:5173/data/itemData.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  const FilterItem = items.filter((item) => item.new === true);
  return (
    <List>
      <ItemContainer>
        <Title>NEW ITEM</Title>
        <CardContainer>
          {FilterItem.map((item) => (
            <ItemCard key={item.id}>
              <Img src={item.image} />
              <p>{item.name}</p>
              <p>{item.price} 원</p>
              <button
                onClick={() => {
                  setModal(true);
                }}
              >
                더 알아보기
              </button>
            </ItemCard>
          ))}

          {modal === true ? <Modal /> : null}
        </CardContainer>
      </ItemContainer>
      <div>
        <label>카테고리</label>
        <CategoryCheck />
        <label>일수</label>
        <input placeholder="최대5일까지입력가능합니다" />
      </div>
      <ItemContainer>
        <CardContainer>
          {items.map((item) => (
            <ItemCard key={item.id}>
              <Img src={item.image} />
              <p>{item.name}</p>
              <p>{item.price} 원</p>
              <button
                onClick={() => {
                  setModal(true);
                }}
              >
                더 알아보기
              </button>
            </ItemCard>
          ))}
        </CardContainer>
      </ItemContainer>
    </List>
  );
};
export default ChoiceItem;

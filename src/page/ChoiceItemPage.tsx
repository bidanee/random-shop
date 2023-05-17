import { useEffect, useState } from "react";
import {
  List,
  ItemContainer,
  Title,
  CardContainer,
  ItemCard,
  Img,
} from "../styledComponents/CardStyled";
import { CategoryCheck } from "../components/CategoryCheck";
import { Counter } from "../components/DayCount";
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
            <ItemCard to={`/fooditem/${item.id}`} key={item.id}>
              <Img src={item.image} />
              <p>{item.name}</p>
              <p>{item.price} 원</p>
            </ItemCard>
          ))}
        </CardContainer>
      </ItemContainer>
      <div>위시리스트에서 선택하기</div>
      <div>
        <label>일수</label>
        <Counter />
      </div>
      <CategoryCheck />
    </List>
  );
};
export default ChoiceItem;

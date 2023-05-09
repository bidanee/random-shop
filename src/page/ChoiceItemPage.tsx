import { useEffect, useState } from "react";
import {
  List,
  ItemContainer,
  Title,
  CardContainer,
  ItemCard,
  Img,
} from "../styledComponents/CardStyled";
export interface itemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  new: boolean;
}
[];

const ChoiceItem = () => {
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
            </ItemCard>
          ))}
        </CardContainer>
      </ItemContainer>
      <ItemContainer>
        <CardContainer>
          {items.map((item) => (
            <ItemCard key={item.id}>
              <Img src={item.image} />
              <p>{item.name}</p>
              <p>{item.price} 원</p>
            </ItemCard>
          ))}
        </CardContainer>
      </ItemContainer>
    </List>
  );
};
export default ChoiceItem;

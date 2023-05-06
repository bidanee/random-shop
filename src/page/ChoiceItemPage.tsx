import { useEffect, useState } from "react";
import styled from "styled-components";
interface itemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  new: string;
}
[];
const Img = styled.img`
  height: 300px;
  width: 300px;
`;
const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 5rem;
`;
const ChoiceItem = () => {
  const [items, setItems] = useState<itemProps[]>([]);
  useEffect(() => {
    fetch("http://localhost:5173/data/itemData.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <List>
      {items.map((item) => (
        <div key={item.id}>
          <Img src={item.image} />
          <p>{item.name}</p>
          <p>{item.price} 원</p>
        </div>
      ))}
    </List>
  );
};
export default ChoiceItem;

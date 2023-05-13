import Slider from "../components/Slider";
import { PageContainer } from "../styledComponents/PageStyled";
import itemData from "../../public/data/itemData.json";
import {
  CardContainer,
  Img,
  ItemCard,
  ItemContainer,
  List,
  Title,
} from "../styledComponents/CardStyled";
import { useEffect, useState } from "react";
import { itemProps } from "./ChoiceItemPage";
import { Link } from "react-router-dom";

const Main = () => {
  const [items, setItems] = useState<itemProps[]>([]);
  useEffect(() => {
    setItems(itemData);
  }, []);

  const NewItem = items.filter((i) => {
    return i.new === true;
  });
  return (
    <PageContainer>
      <Slider />
      <List>
        <ItemContainer>
          <Title>NEW ITEM</Title>
          <CardContainer>
            {NewItem?.map((item) => (
              <ItemCard to={`/fooditem/${item.id}`} key={item.id}>
                <Img src={item.image} />
                <p>{item.name}</p>
                <p>{item.price} 원</p>
              </ItemCard>
            ))}
          </CardContainer>
        </ItemContainer>
      </List>
      <div>
        <Link to={"/choice"}>랜덤선택하러 가기</Link>
      </div>
    </PageContainer>
  );
};

export default Main;

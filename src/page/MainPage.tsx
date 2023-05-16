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
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { Wishstate } from "../service/atoms";

const Main = () => {
  const [items, setItems] = useState<itemProps[]>([]);
  useEffect(() => {
    setItems(itemData);
  }, []);

  const NewItem = items.filter((i) => {
    return i.new === true;
  });
  //wishItem
  const UserId = JSON.parse(localStorage.getItem("user")).email;
  const baskets = JSON.parse(localStorage.getItem(`${UserId}.baskets`)) || [];
  const [wish, setWish] = useRecoilState(Wishstate);
  const onClickWish = (boardEl: string, wish: boolean) => {
    if (!baskets.includes(boardEl)) {
      baskets.push(boardEl);
      if (baskets.includes(boardEl)) {
        setWish(true);
      }
    } else {
      baskets.splice(baskets.indexOf(boardEl));
      setWish(false);
    }
    localStorage.setItem(`${UserId}.baskets`, JSON.stringify(baskets));
  };
  console.log(wish);
  return (
    <PageContainer>
      <Slider />
      <List>
        <ItemContainer>
          <Title>NEW ITEM</Title>
          <CardContainer>
            {NewItem?.map((item) => (
              <div key={item.id}>
                <ItemCard to={`/fooditem/${item.id}`}>
                  <Img src={item.image} />
                  <p>{item.name}</p>
                  <p>{item.price} 원</p>
                </ItemCard>
                {baskets.includes(item.name) === true ? (
                  <AiFillHeart
                    size={24}
                    onClick={() => onClickWish(item.name, true)}
                  />
                ) : (
                  <AiOutlineHeart
                    size={24}
                    onClick={() => onClickWish(item.name, wish)}
                  />
                )}
              </div>
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

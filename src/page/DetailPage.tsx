import { useEffect, useState } from "react";
import styled from "styled-components";
import { itemProps } from "./ChoiceItemPage";
import itemData from "../../public/data/itemData.json";
import { useLocation } from "react-router-dom";
import { Img } from "../styledComponents/CardStyled";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 5rem;
`;
const DetailItem = () => {
  const [items, setItems] = useState<itemProps[]>([]);
  useEffect(() => {
    setItems(itemData);
  }, []);

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const item = items.filter((i) => i.id === Number(id));
  const detail = item[0];
  /* console.log(item)
    중복 렌더링됨 빈배열과 들어있는 배열
  */
  return (
    <Container>
      {item.length && (
        <div>
          <Img src={detail.image} alt={detail.name} />
          <p>카테고리 : {detail.category}</p>
          <p>{detail.name}</p>
          <p>{detail.price}</p>
          <p>{detail.desc}</p>
        </div>
      )}
    </Container>
  );
};

export default DetailItem;

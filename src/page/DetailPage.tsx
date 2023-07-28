import { useEffect, useState } from "react";
import styled from "styled-components";
import { itemProps } from "./ChoiceItemPage";
import itemData from "../../public/data/itemData.json";
import { useLocation } from "react-router-dom";
import CartBtn from "../components/Cart";
import tw from "twin.macro";

const DetailItem = () => {
  const [items, setItems] = useState<itemProps[]>([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const item = items.filter((i) => i.id === Number(id));
  const detail = item[0];
  const userId = JSON.parse(localStorage.getItem("user")).email;
  const baskets = JSON.parse(localStorage.getItem(userId)) || [];
  useEffect(() => {
    setItems(itemData);
  }, []);
  const onClickWish = (boardEl: string) => {
    if (!baskets.includes(boardEl)) {
      baskets.push(boardEl);
    } else {
      if (confirm("이미 찜하셨습니다 취소하시겠습니까?") === true) {
        baskets.splice(baskets.indexOf(boardEl), 1);
      }
    }
    localStorage.setItem(userId, JSON.stringify(baskets));
  };
  useEffect(() => {
    setItems(itemData);
  }, []);

  return (
    <Wrapper>
      <Container>
        {item.length && (
          <DetailContainer>
            <Image src={detail.image} alt={detail.name} />
            <Detail>
              <NameP>{detail.name}</NameP>
              <DetailP>카테고리 : {detail.category}</DetailP>
              <DetailP>가격 : {detail.price}</DetailP>
              <DetailP>{detail.desc}</DetailP>
              <BtnDiv>
                <button
                  className="btn-sm btn-accent text-white mr-2"
                  onClick={() => onClickWish(detail.name)}
                >
                  찜하기
                </button>
                <CartBtn />
              </BtnDiv>
            </Detail>
          </DetailContainer>
        )}
      </Container>
    </Wrapper>
  );
};

const BtnDiv = styled.div`
  ${tw`flex`}
`;
const Detail = styled.div``;
const DetailP = styled.p`
  margin: 1rem 0;
  font-size: 1.25rem;
`;
const NameP = styled(DetailP)`
  font-size: 2rem;
  margin-bottom: 3rem;
  font-weight: bolder;
  color: rgb(84 45 111 / 55%);
`;

const Image = styled.img`
  width: 20rem;
  height: 19.9rem;
  margin-right: 2rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;
const DetailContainer = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  width: 49rem;
  height: 20rem;
  /* margin: 3rem; */
  padding-right: 2rem;
  border: 1px solid black;
  border-radius: 1rem;
  box-shadow: 0px 1px 2px 3px rgb(0 8 4 / 55%);
`;
const Container = styled.div``;
const Wrapper = styled.div`
  ${tw`w-full h-screen flex flex-wrap justify-center items-center`}
`;

export default DetailItem;

import { useEffect, useState } from "react";
import {
  CardContainer,
  DescDiv,
  FillHeartICon,
  HeartICon,
  Img,
  ItemCard,
  ItemContainer,
  ItemP,
  MainContainer,
  OpenTag,
  Title,
} from "../styledComponents/CardStyled";
import itemData from "../../public/data/itemData.json";
import { itemProps } from "../page/ChoiceItemPage";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { DayCountState, Wishstate } from "../service/atoms";
import { Counter } from "../components/DayCount";
import styled from "styled-components";
// import Pagination from "./Pagination";
const categoryList = [
  { name: "다이어트" },
  { name: "아시안푸드" },
  { name: "중식" },
  { name: "일식" },
  { name: "한식" },
  { name: "양식" },
];
export const CategoryCheck = () => {
  const [page, setPage] = useState(1);
  const limit = 4;
  const offset = (page - 1) * limit;
  const [items, setItems] = useState<itemProps[]>([]);
  useEffect(() => {
    setItems(itemData);
  }, []);
  const [checkedList, setCheckedList] = useState<Array<string>>([]);
  const handleSingleCheck = (checked: boolean, item: string) => {
    if (checked) {
      setCheckedList((prev) => [...prev, item]);
    } else {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
  };
  const handleCheckAllClick = (checked: boolean) => {
    if (checked) {
      const idArray: Array<string> = [];
      categoryList.forEach((el) => idArray.push(el.name));
      setCheckedList(idArray);
    } else {
      setCheckedList([]);
    }
  };
  const filterItem = items.filter(
    (item) => checkedList.includes(item.category) === true
  );
  const total = filterItem.length;
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
  const [count, setCount] = useRecoilState(DayCountState);
  const selectIndex = (totalIndex: number, selectingNumber: number) => {
    const randomIndexArray = [];
    for (let i = 0; i < selectingNumber; i++) {
      //check if there is any duplicate index
      const randomNum = Math.floor(Math.random() * totalIndex);
      if (randomIndexArray.indexOf(randomNum) === -1) {
        randomIndexArray.push(randomNum);
      } else {
        //if the randomNum is already in the array retry
        i--;
      }
    }
    return randomIndexArray;
  };

  return (
    <div>
      <OpenTag>
        <Counter />
        <CategoryDiv>
          <Ptag>카테고리</Ptag>
        </CategoryDiv>
        <DivTag>
          {categoryList.map((item) => {
            return (
              <label key={item.name}>
                <input
                  type="checkbox"
                  id={item.name}
                  onChange={(e) =>
                    handleSingleCheck(e.target.checked, e.target.id)
                  }
                  checked={checkedList.includes(item.name) ? true : false}
                />
                <label htmlFor={item.name}>
                  <CategoryP>{item.name}</CategoryP>
                </label>
              </label>
            );
          })}
          <label>
            <input
              type="checkbox"
              id="전체"
              onChange={(e) => handleCheckAllClick(e.target.checked)}
              checked={
                checkedList.length === categoryList.length ? true : false
              }
            />
            <label htmlFor="전체">
              <CategoryP>전체</CategoryP>
            </label>
          </label>
        </DivTag>
      </OpenTag>
      <div>
        <div>
          <ItemContainer>
            <Title>카테고리별 상품</Title>
            <CardContainer>
              <div>
                <MainContainer>
                  {filterItem.length > 0 ? (
                    filterItem.slice(offset, offset + limit).map(
                      (item) =>
                        checkedList.includes(item.category) && (
                          <ItemCard key={item.id}>
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
                                    <HeartICon
                                      size={24}
                                      onClick={() => setWish(!wish)}
                                    />
                                  </ItemP>
                                )}
                              </div>
                            </DescDiv>
                          </ItemCard>
                        )
                    )
                  ) : (
                    <Select>카테고리를 골라 주세요</Select>
                  )}
                </MainContainer>
                <div>
                  <Pagination
                    total={total}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                  />
                </div>
              </div>
            </CardContainer>
          </ItemContainer>
        </div>
      </div>
    </div>
  );
};
const Select = styled.p`
  padding-left: 13rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 3rem;
  color: #025464;
`;

const DivTag = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #025464;
  padding: 0.5rem;
  height: 2.5rem;
  width: 23rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;
const CategoryDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  height: 2.5rem;
  border: 1px solid #025464;
  border-right: none;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;
const Ptag = styled.p`
  font-size: 1.1rem;
  font-weight: bolder;
  color: #025464;
  margin: 0.2rem;
  /* margin-left: 0.5rem; */
`;
const CategoryP = styled(Ptag)`
  :hover {
    color: #f8f1f1;
    border: 1px solid #025464;
    border-radius: 1rem;
    background-color: #025464;
    padding: 0.2rem;
  }
`;

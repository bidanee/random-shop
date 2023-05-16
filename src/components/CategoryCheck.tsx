import { useEffect, useState } from "react";
import {
  CardContainer,
  Img,
  ItemCard,
  ItemContainer,
  Title,
} from "../styledComponents/CardStyled";
import itemData from "../../public/data/itemData.json";
import { itemProps } from "../page/ChoiceItemPage";
import styled from "styled-components";
import Pagination from "./Pagination";
// import Pagination from "./Pagination";
const categoryList = [
  { name: "다이어트" },
  { name: "아시안푸드" },
  { name: "중식" },
  { name: "일식" },
  { name: "한식" },
  { name: "양식" },
];

const OpenTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 700;
  font-size: 16px;
  input {
    display: none;
  }
`;
export const CategoryCheck = () => {
  const limit = 3;
  const [page, setPage] = useState(1);
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

  return (
    <div>
      <p>카테고리 :</p>
      <OpenTag>
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
                <span>{item.name}</span>
              </label>
            </label>
          );
        })}
        <label>
          <input
            type="checkbox"
            id="전체"
            onChange={(e) => handleCheckAllClick(e.target.checked)}
            checked={checkedList.length === categoryList.length ? true : false}
          />
          <label htmlFor="전체">
            <span>전체</span>
          </label>
        </label>
      </OpenTag>
      <div>
        <div>
          <ItemContainer>
            <Title>카테고리별 상품</Title>
            <CardContainer>
              <div>
                <main>
                  {filterItem.slice(offset, offset + limit).map(
                    (item) =>
                      checkedList.includes(item.category) && (
                        <ItemCard to={`/fooditem/${item.id}`} key={item.id}>
                          <Img src={item.image} />
                          <p>{item.name}</p>
                          <p>{item.price} 원</p>
                        </ItemCard>
                      )
                  )}
                </main>
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

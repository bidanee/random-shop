import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router";
import styled from "styled-components";
const Search = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [keyItems, setKeyItems] = useState([]);
  const navigation = useNavigate();
  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };
  const fetchData = () => {
    return fetch("http://localhost:5173/data/itemData.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => data);
  };
  interface Food {
    includes(data: string): boolean;
    name?: string;
  }
  const updateData = async () => {
    const res = await fetchData();
    const items = res.filter(
      (item: Food) => item.name.includes(keyword) === true
    );
    setKeyItems(items);
  };
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) updateData();
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]); //키워드가 변경되면 api를 호출
  return (
    <Label>
      <Input
        type="search"
        value={keyword}
        onChange={onChangeData}
        placeholder="검색"
      />
      <BiSearch size={24} />
      {keyItems.length > 0 && keyword && (
        <UlContainer>
          <Ul>
            {keyItems?.map((search) => (
              <Li
                key={search.id}
                onClick={() => navigation(`/fooditem/${search.id}`)}
              >
                {search.name}
              </Li>
            ))}
          </Ul>
        </UlContainer>
      )}
      {keyItems.length == 0 && keyword && (
        <UlContainer>
          <Ul>
            <Hasnt>검색결과가 없습니다 </Hasnt>
          </Ul>
        </UlContainer>
      )}
    </Label>
  );
};
const Hasnt = styled.li`
  margin: 0.5rem 1rem 0;
`;
const UlContainer = styled.div`
  position: absolute;
  top: 31px;
  width: 12rem;
  height: 10rem;
  background-color: white;
  opacity: 0.8;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;
const Li = styled.li`
  cursor: pointer;
  :hover {
    color: skyblue;
  }
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 5px;
  left: 0;
`;
const Input = styled.input`
  width: 8rem;
  height: 1.8rem;
  outline: none;
  font-size: 1rem;
  border-radius: 1rem;
  margin-right: 1rem;
`;
const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 2rem;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 0.1px 3px;
`;
export default Search;

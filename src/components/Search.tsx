import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [keyItems, setKeyItems] = useState([]);
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
    <div>
      <input value={keyword} onChange={onChangeData} />
      <BiSearch />
      {keyItems.length > 0 && keyword && (
        <div>
          <ul>
            {keyItems.map((search) => (
              <li key={search.index}>{search.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Search;

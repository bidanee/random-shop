import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const Search = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [keyItems, setKeyItems] = useState([]);

  const navigation = useNavigate();
  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };
  const fetchData = () => {
    return fetch(
      "https://random-shop-git-master-bidanee.vercel.app/data/itemData.json",
      { method: "GET" }
    )
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
  }, [keyword]);

  return (
    <div className=" flex-1 flex-row ">
      <input
        className="hidden md:block input input-bordered focus:outline-none pl-2  w-32 md:w-96 cursor-pointer"
        type="search"
        value={keyword}
        onChange={onChangeData}
        placeholder="검색"
        onBlur={() => setKeyword("")}
      />

      {keyItems.length > 0 && keyword && (
        <div className="absolute top-12">
          <ul
            tabIndex={0}
            className="absolute top-1 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-96"
          >
            {keyItems?.map((search) => (
              <li
                className="cursor-pointer mb-1 hover:bg-green-100"
                key={search.id}
                onMouseDown={() => {
                  navigation(`/fooditem/${search.id}`);
                  setKeyword("");
                }}
              >
                {search.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {keyItems.length == 0 && keyword && (
        <div className="absolute top-12">
          <ul className="absolute top-1 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-96">
            <li>검색결과가 없습니다 </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Search;

import { useCallback, useState } from "react";
const categoryList = [
  { name: "다이어트" },
  { name: "아시안" },
  { name: "중식" },
  { name: "일식" },
  { name: "한식" },
  { name: "양식" },
];

export const CategoryCheck = () => {
  const [checkedList, setCheckedList] = useState<Array<string>>([]);
  const onCheckedItem = useCallback(
    (checked: boolean, item: string) => {
      if (checked) {
        setCheckedList((prev) => [...prev, item]);
      } else if (!checked) {
        setCheckedList(checkedList.filter((el) => el !== item));
      }
    },
    [checkedList]
  );
  return (
    <div>
      {categoryList.map((item) => {
        return (
          <label key={item.name}>
            <input
              type="checkbox"
              id={item.name}
              onChange={(e) => onCheckedItem(e.target.checked, e.target.id)}
            />
            <label htmlFor={item.name}>
              <span>{item.name}</span>
            </label>
          </label>
        );
      })}
    </div>
  );
};

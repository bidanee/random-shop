import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const onInc = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };
  const onDec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onInc}>+</button>
        <p>{count}</p>
        <button onClick={onDec}>-</button>
      </div>
    </div>
  );
};

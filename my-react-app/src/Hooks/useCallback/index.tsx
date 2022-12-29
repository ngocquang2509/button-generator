import { useState } from "react";

const storeSet = new Set();

const CounterCallback = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const plusCount = () => setCount(count + 1);
  const minusCount = () => setCount(count - 1);

  const plusOtherCount = () => setOtherCount(count + 1);
  const minusOtherCount = () => setOtherCount(count - 1);

  storeSet.add(plusCount);
  storeSet.add(minusCount);
  storeSet.add(plusOtherCount);
  storeSet.add(minusOtherCount);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={plusCount}>plus Count</button>
      <button onClick={minusCount}>minus Count</button>

      <div>Count other: {otherCount}</div>
      <button onClick={plusOtherCount}>plus Count other</button>
      <button onClick={minusOtherCount}>minus Count other</button>
    </>
  );
};

export default CounterCallback;

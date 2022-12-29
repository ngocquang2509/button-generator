import { useEffect, useRef, useState } from "react";

const ButtonRef = () => {
  let ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert("You clicked" + ref.current + " times");
  };

  console.log("I rendered !");

  return <button onClick={handleClick}>Click me !</button>;
};

export default ButtonRef;

export const StopWatch = () => {
  const timeRef = useRef(0);
  const [count, setCount] = useState(0);

  const startCount = () => {
    if (timeRef.current) {
      return;
    }
    timeRef.current = setInterval(() => setCount((count) => count + 1), 1000);
  };

  const stopCount = () => {
    clearInterval(timeRef.current);
    timeRef.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(timeRef.current);
  }, []);

  return (
    <>
      <div>Time: {count} s</div>
      <div>
        <button onClick={startCount}>Start</button>
        <button onClick={stopCount}>Stop</button>
      </div>
    </>
  );
};

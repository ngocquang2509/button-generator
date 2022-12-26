import { useRef } from "react";

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

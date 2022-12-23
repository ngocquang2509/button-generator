import { useState, useEffect } from "react";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times </button>
    </div>
  );
};
export default HookCounterOne;

export const Effect = () => {
  const [resource, setResource] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resource]);

  const handleClickUsers = () => {
    setResource("users");
  };

  const handleClickPosts = () => {
    setResource("posts");
  };

  return (
    <>
      <button onClick={handleClickPosts}>Posts</button>
      <button onClick={handleClickUsers}>Users</button>
      <h2>{resource}</h2>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

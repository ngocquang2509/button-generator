import { Profiler, useMemo, useState } from "react";
import HoverImage1 from "./Advance/HOC/Image1";
import HoverImage2 from "./Advance/HOC/Image2";
import NewForm from "./Advance/Profiler/NewForm";
import { profilerCallback } from "./Advance/Profiler/profilerCallback";
import "./App.css";
import { Effect } from "./Hooks/useEffect";
import CounterReducer from "./Hooks/useReducer";
import { Greeting } from "./Main Concepts/Conditional Rendering";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const memoizedComponent = useMemo(() => {
    return <Greeting isLoggedIn={true} />;
  }, []);

  return (
    <div className="App">
      <h2>You clicked {count} times</h2>
      <button onClick={handleClick}>Click me !</button>
      {memoizedComponent}
    </div>
  );
};

export default App;

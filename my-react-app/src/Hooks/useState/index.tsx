import { useState } from "react";

const FormStateHook = () => {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(42);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setAge(age + 1)}>Increment age</button>
      <p>
        Hello, {name}. You are {age}.
      </p>
    </>
  );
};

export default FormStateHook;

// Passing initializer function
const createInitialTodos = () => {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
};

const TodoList = () => {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};

// Reset state with key
const Form = () => {
  const [name, setName] = useState("Taylor");

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}.</p>
    </>
  );
};

const FormContainer = () => {
  const [version, setVersion] = useState(0);

  const handleReset = () => {
    setVersion(version + 1);
  };

  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <Form key={version} />
    </>
  );
};

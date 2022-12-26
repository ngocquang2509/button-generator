import { createContext, useContext, useState } from "react";

interface User {
  name: string;
}

const UserContext = createContext<User | null>(null);

const InitialUser: User = {
  name: "Quang Ngoc",
};

const Comp1 = () => {
  const [user, setUser] = useState<User>(InitialUser);

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}`}</h1>
      <Comp2 />
    </UserContext.Provider>
  );
};

const Comp2 = () => {
  return (
    <>
      <h2>Component 2</h2>
      <Comp3 />
    </>
  );
};

const Comp3 = () => {
  return (
    <>
      <h2>Component 3</h2>
      <Comp4 />
    </>
  );
};

const Comp4 = () => {
  return (
    <>
      <h2>Component 4</h2>
      <Comp5 />
    </>
  );
};

const Comp5 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h2>Component 5</h2>
      <h3>{`Hello ${user} from Comp5`}</h3>
    </>
  );
};

export default Comp1;

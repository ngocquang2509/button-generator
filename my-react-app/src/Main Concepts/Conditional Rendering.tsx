import { useEffect } from "react";

export const Greeting = (props: any) => {
  const isLoggedIn = props.isLoggedIn;

  useEffect(() => {
    console.log("Hey I am rendering again -_-");
  });
  
  return (
    <div>
      <h1>The current user is: {isLoggedIn ? "Logged User" : "Guest"}</h1>
    </div>
  );
};

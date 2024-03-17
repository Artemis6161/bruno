import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log("hello");
  }, [count]);
  function Counter() {
    setCount((prev) => {
      return prev + 1;
    });
  }

  return (
    <>
      <button onClick={Counter}>render</button>
      <p>I have Rendered {count} Times!.</p>
    </>
  );
}

export default Timer;

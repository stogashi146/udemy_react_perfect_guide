import React, { useReducer, useState } from "react";
import { act } from "react-dom/test-utils";

const Example = () => {
  const [count, setCount] = useState(0);
  const [rsate, dispatch] = useReducer((prev, action) => {
    if (action === "+") {
      return ++prev;
    } else if (action === "-") {
      return --prev;
    }
  }, 0);

  const countUp = () => {
    setCount((prev) => ++prev);
  };

  const rcountUp = () => {
    dispatch("+");
  };

  const rcountDown = () => {
    dispatch("-");
  };

  return (
    <>
      <div>
        <h3>{count}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h3>{rsate}</h3>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;

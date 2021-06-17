import React, { useContext } from "react";
import { CounterContext } from "./context/CounterContext";

export default function CounterButtons() {
  const [count, setCount] = useContext(CounterContext);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex">
      <button
        className="focus:outline-none outline-none block px-6 py-2 bg-purple-600 text-white mr-6"
        onClick={increment}
      >
        Add
      </button>
      <button
        className="focus:outline-none outline-none block px-6 py-2 bg-red-600 text-white"
        onClick={decrement}
      >
        Minus
      </button>
    </div>
  );
}

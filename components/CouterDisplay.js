import React, { useContext } from "react";
import { CounterContext } from "./context/CounterContext";

export default function CounterDisplay() {
  const [count] = useContext(CounterContext);

  return <span className="shadow p-3 my-6 text-4xl inline-block">{count}</span>;
}

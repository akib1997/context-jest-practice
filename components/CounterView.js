import { Counter } from "./context/CounterContext";
import CounterDisplay from "./CouterDisplay";
import CounterButtons from "./CounterButtons";

export default function CounterView() {
  return (
    <Counter>
      <h3 className="text-3xl mb-4 text-purple-800 font-semibold">Counter</h3>
      <div className="shadow-xl p-4 max-w-md mx-auto bg-purple-100 rounded-md">
        <CounterDisplay />
        <CounterButtons />
      </div>
    </Counter>
  );
}

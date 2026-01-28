import React,{ useState } from "react";

function App() {
  const MIN = 0;
  const MAX = 100;

  const [counter, setCounter] = useState(50);

  const increment = () => {
    if (counter < MAX) setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > MIN) setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(50);
  };

  return (
    <div className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-slate-900 via-slate-800 to-black">

      <div className="bg-white w-80 rounded-2xl p-8
        shadow-2xl text-center">

        <h1 className="text-2xl font-bold text-slate-800 mb-6">
          Counter App
        </h1>

        <h2 className="text-5xl font-bold text-blue-600 mb-8">
          {counter}
        </h2>

        <div className="flex items-center justify-between gap-4">
          <button
            onClick={decrement}
            disabled={counter === MIN}
            className={`w-14 h-14 rounded-full text-3xl font-bold text-white
              transition-all active:scale-95 cursor-pointer
              ${counter === MIN
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"}`}
          >
            −
          </button>

          <button
            onClick={reset}
            className="px-4 py-2 rounded-xl bg-indigo-500
              text-white font-semibold hover:bg-indigo-600
              active:scale-95 transition cursor-pointer"
          >
            Reset
          </button>

          <button
            onClick={increment}
            disabled={counter === MAX}
            className={`w-14 h-14 rounded-full text-3xl font-bold text-white
              transition-all active:scale-95 cursor-pointer
              ${counter === MAX
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"}`}
          >
            +
          </button>
        </div>

        <p className="text-sm text-slate-500 mt-6">
          Min: {MIN} | Max: {MAX}
        </p>
      </div>
    </div>
  );
}

export default App;

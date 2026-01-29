import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyinfo from "./hooks/useCurrecyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!currencyInfo || !currencyInfo[to]) return;
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="w-full max-w-md rounded-2xl p-6 shadow-xl bg-white/70 backdrop-blur-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* FROM */}
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
          />

          {/* SWAP */}
          <div className="relative my-4 flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="z-10 flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 shadow-lg"
            >
              ⇅ Swap
            </button>
          </div>

          {/* TO */}
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />

          {/* CONVERT */}
          <button
            type="submit"
            disabled={options.length === 0}
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 
                       hover:from-blue-700 hover:to-indigo-700
                       text-white font-semibold py-3 rounded-xl
                       transition-all duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

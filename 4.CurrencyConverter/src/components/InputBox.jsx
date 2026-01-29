function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = ""
}) {
  return (
    <div
      className={`bg-white/80 p-4 rounded-xl text-sm flex gap-3 shadow-sm ${className}`}
    >
      {/* LEFT */}
      <div className="w-1/2">
        <label className="text-black/50 mb-2 inline-block">
          {label}
        </label>

        <input
          className="outline-none w-full bg-transparent py-1.5 
                     text-lg font-medium"
          type="number"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          placeholder="Amount"
        />
      </div>

      {/* RIGHT */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/50 mb-2 w-full">
          Currency Type
        </p>

        <select
          className="rounded-lg px-3 py-2 bg-gray-100 hover:bg-gray-200 
                     transition cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOptions.length === 0 ? (
            <option>Loading...</option>
          ) : (
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

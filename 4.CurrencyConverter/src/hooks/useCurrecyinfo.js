import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency] || {});
      })
      .catch(() => setData({}));
  }, [currency]);

  return data;
}

export default useCurrencyinfo;

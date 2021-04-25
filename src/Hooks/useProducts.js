import { useEffect, useState, useCallback } from "react";

export const useProducts = (query, minPrice, maxPrice) => {
  const [data, setData] = useState([]);
  const [firstHit, setFirstHit] = useState(false);

  const URL = `services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=WandoInt-217b-42d8-a699-e79808dd505e&keywords=${query}&RESPONSE-DATA-FORMAT=JSON`;

  const fetchData = useCallback(async () => {
    const res = await fetch(URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const json = await res.json();
    const data = json.findItemsByKeywordsResponse;
    const formattedData = data.map((d) => d.searchResult.map((i) => i.item));
    setData(formattedData[0][0]);
    setFirstHit(true);
  }, [URL]);

  useEffect(() => {
    fetchData();
  }, [fetchData, query]);

  const filterProductPrices = useCallback(() => {
    const results =
      data &&
      data.filter((d) =>
        d.sellingStatus.some((s) =>
          s.currentPrice.some(
            (p) =>
              parseInt(p.__value__) >= minPrice &&
              parseInt(p.__value__) <= maxPrice
          )
        )
      );
    setData(results);
  }, [data, minPrice, maxPrice]);

  useEffect(() => {
    if (minPrice > 0 && maxPrice > 0 && maxPrice > minPrice) {
      filterProductPrices();
    }
    if (minPrice < 1 && maxPrice < 1) {
      console.log(minPrice, maxPrice);
      fetchData();
    }
    if (!minPrice && !maxPrice) {
      fetchData();
    }
  }, [minPrice, maxPrice]);

  return [data, firstHit];
};

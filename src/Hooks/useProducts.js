import { useEffect, useState, useCallback } from "react";

export const useProducts = (keyword, query, minPrice, maxPrice) => {
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
    console.log(formattedData[0][0]);
    setData(formattedData[0][0]);
    minPrice = 0;
    maxPrice = 0;
    setFirstHit(true);
  }, [URL]);

  useEffect(() => {
    fetchData();
  }, [fetchData, query]);

  console.log(data);

  const filterProductPrices = useCallback(async () => {
    const filteredArr = [];
    (await data) &&
      data.forEach((i) => {
        i.sellingStatus.forEach((s) => {
          s.currentPrice.filter((p) => {
            const intValue = parseInt(p.__value__);
            if (intValue >= minPrice && intValue <= maxPrice) {
              console.log("matching prices", p.__value__);
              filteredArr.push(i);
              console.log(i);
              // return i
            }
          });
        });
      });
    // setData(results)
    setData(filteredArr);
    console.log(data);
  }, [data, minPrice, maxPrice]);

  useEffect(() => {
    if (minPrice > 0 && maxPrice > 0 && maxPrice > minPrice) {
      filterProductPrices();
    }
  }, [minPrice, maxPrice]);

  return [data, firstHit];
};

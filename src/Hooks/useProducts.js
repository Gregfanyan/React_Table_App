import { useEffect, useState } from "react";

export const useProducts = (keyword, query) => {
  const [data, setData] = useState([]);

  const URL = `services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=WandoInt-217b-42d8-a699-e79808dd505e&keywords=${query}&RESPONSE-DATA-FORMAT=JSON`;
  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => setData(json.findItemsByKeywordsResponse))
      .catch((e) => console.log("error"));
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return [data, fetchData];
};

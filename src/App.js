import React, { useState } from "react";

import { useProducts } from "./Hooks/useProducts";
import Home from "./Home";
import "./App.css";

function App() {
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("apple");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const [data, firstHit] = useProducts(keyword, query);

  const onChangeHandler = (e) => {
    setKeyword(e.target.value);
  };

  console.log(data);

  const minPriceOnChangeHandler = (e) => {
    setMinPrice(e.target.value);
  };

  const maxPriceOnChangeHandler = (e) => {
    setMaxPrice(e.target.value);
  };

  const onClickHandler = (e) => {
    if (keyword) {
      e.preventDefault();
      setQuery(keyword);
      setKeyword("");
    } else {
      alert("Input field is empty");
    }
  };

  const filterProductPrices = (priceRangeOne, priceRangeTwo) => {
    data.forEach((p) => {
      p.searchResult.forEach((i) => {
        i.item.forEach((i) => {
          i.sellingStatus.forEach((s) => {
            s.currentPrice.filter((p) => {
              parseInt(p.__value__);
              if (
                parseInt(p.__value__) >= priceRangeOne &&
                parseInt(p.__value__) <= priceRangeTwo
              ) {
                console.log("matching prices", p.__value__);
              } else {
                console.log("not matching prices", p.__value__);
              }
            });
          });
        });
      });
    });
  };

  console.log(filterProductPrices(minPrice, maxPrice));

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="ebay product"
          onChange={onChangeHandler}
          value={keyword}
        />
        <button onClick={onClickHandler}>Search</button>
      </div>
      <input
        type="number"
        placeholder="Min Price"
        onChange={minPriceOnChangeHandler}
        value={minPrice}
      />
      <input
        type="number"
        placeholder="Max Price"
        onChange={maxPriceOnChangeHandler}
        value={maxPrice}
      />
      <React.Fragment>
        {data && data.length > 0 ? (
          data.map((a) =>
            a.searchResult.map((product, i) => (
              <Home key={i} data={product.item} />
            ))
          )
        ) : firstHit ? (
          <div>No Data</div>
        ) : (
          ""
        )}
      </React.Fragment>
    </div>
  );
}

export default App;

import React, { useState } from "react";

import { useProducts } from "./Hooks/useProducts";
import Home from "./Home";
import "./App.css";

function App() {
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("apple");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const [data, firstHit] = useProducts(query, minPrice, maxPrice);

  const onChangeHandler = (e) => {
    setKeyword(e.target.value);
  };

  console.log(data);

  const minPriceOnChangeHandler = (e) => {
    setMinPrice(e.target.value);
  };

  const maxPriceOnChangeHandler = (e) => {
    setMaxPrice(parseInt(e.target.value));
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

  const clearInput = () => {
    setMinPrice(0);
    setMaxPrice(0);
  };

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
      <button onClick={clearInput}>Clear</button>
      <React.Fragment>
        {data && data.length > 0 ? (
          <Home data={data} />
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

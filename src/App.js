import React, { useState } from "react";

import { useProducts } from "./Hooks/useProducts";
import Home from "./Home";
import "./App.css";

function App() {
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("apple");

  const [data] = useProducts(keyword, query);

  const onChangeHandler = (e) => {
    setKeyword(e.target.value);
  };

  console.log(data);

  const onClickHandler = (e) => {
    e.preventDefault();
    setQuery(keyword);
    setKeyword("");
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
        <button onClick={onClickHandler}>fetch</button>
      </div>
      <div>
        {data &&
          data.map((a) =>
            a.searchResult.map((product, i) => (
              <Home key={i} data={product.item} />
            ))
          )}
      </div>
    </div>
  );
}

export default App;

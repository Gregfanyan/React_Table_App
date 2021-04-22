import React, { useState } from "react";
import { useProducts } from "./Hooks/useProducts";

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
            a.searchResult.map((b) =>
              b.item.map((c, i) => (
                <ul key={i} style={{ listStyle: "none" }}>
                  <li>{c.title}</li>
                  {c.galleryURL && (
                    <li key={c.id}>
                      {c.galleryURL && <img src={c.galleryURL} alt="Product" />}
                    </li>
                  )}
                </ul>
              ))
            )
          )}
      </div>
    </div>
  );
}

export default App;

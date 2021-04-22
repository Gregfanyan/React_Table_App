import React, { useMemo } from "react";
import MainTable from "../components/MainTable";
function Home({ data }) {
    
  const columns = useMemo(
    () => [
      {
        Header: "Products",
        // Second group columns
        columns: [
          {
            Header: "Id",
            accessor: "data.itemId[0]",
          },
          {
            Header: "Location",
            accessor: "data.location",
          },
          {
            Header: "Country",
            accessor: "data.country",
          },
          {
            Header: "Title",
            accessor: "data.title",
          },
        ],
      },
    ],
    []
  );

  return (
    <div>
      <MainTable data={data} columns={columns} />
    </div>
  );
}

export default Home;

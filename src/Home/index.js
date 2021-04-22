import React, { useMemo } from "react";
import MainTable from "../components/MainTable";
function Home({ data }) {
    
  const columns = useMemo(
    () => [
      {
        Header: "Products",
        columns: [
          {
            Header: "Id",
            accessor: "itemId",
          },
          {
            Header: "Location",
            accessor: "location",
          },
          {
            Header: "Country",
            accessor: "country",
          },
          {
            Header: "Title",
            accessor: "title",
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

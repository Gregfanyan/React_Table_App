import React, { useMemo } from "react";
import MainTable from "../components/MainTable";
import { COLUMNS } from "../components/Columns";
import ColumnFilter from "../components/ColumnFilter";

function Home({ data }) {
  const columns = useMemo(() => COLUMNS, []);

  console.log(columns);

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const price = data.forEach((d) =>
    d.sellingStatus.map((s) => s.currentPrice.map((c) => c.__value__))
  );
  console.log(price);

  return (
    <div>
      <MainTable data={data} columns={columns} defaultColumn={defaultColumn} />
    </div>
  );
}

export default Home;

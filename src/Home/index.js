import React, { useMemo } from "react";
import MainTable from "../components/MainTable";
import { COLUMNS } from "../components/Columns";
import ColumnFilter from "../components/ColumnFilter";

function Home({ data }) {
  const columns = useMemo(() => COLUMNS, []);

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  return (
    <div>
      <MainTable data={data} columns={columns} defaultColumn={defaultColumn} />
    </div>
  );
}

export default Home;

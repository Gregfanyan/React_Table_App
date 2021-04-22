import React, { useMemo } from "react";
import MainTable from "../components/MainTable";
import { COLUMNS } from "../components/Columns";
function Home({ data }) {
  const columns = useMemo(() => COLUMNS, []);

  return (
    <div>
      <MainTable data={data} columns={columns} />
    </div>
  );
}

export default Home;

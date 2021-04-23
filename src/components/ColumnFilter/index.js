const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      Search:{" "}
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};

export default ColumnFilter;

/* import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

const ColumnFilter = ({ column, filter }) => {
  const [value, setValue] = useState(filter);
  const { filterValue, setFilter } = column;

  const onChange = useAsyncDebounce(
    (value) => setFilter(value || undefined),
    300
  );
  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};

export default ColumnFilter;
 */

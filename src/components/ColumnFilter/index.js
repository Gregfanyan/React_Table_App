const inputStyle = {
  borderRadius: "10px",
  outline: "none",
  border: "none",
  padding: "10px 15px",
};
const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      <input
        style={inputStyle}
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};

export default ColumnFilter;

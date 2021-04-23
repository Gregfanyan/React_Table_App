import ColumnFilter from "../ColumnFilter";

export const COLUMNS = [
  {
    Header: "Location",
    accessor: "location",
    disableFilters: true,
  },
  {
    Header: "Country",
    accessor: "country",
    disableFilters: true,
  },
  {
    Header: "Title",
    accessor: "title",
    Filter: ColumnFilter,
  },
  {
    Header: "Selling Status",
    accessor: "sellingStatus.currentPrice",
    Filter: ColumnFilter,
  },
];

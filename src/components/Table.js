import React from "react";
import { useTable, usePagination, useSortBy } from "react-table";

const Table = () => {
  const data = React.useMemo(
    () => [
      { modelName: "Blonde Drizzle", type: "Extraction", status: "Active" },
      { modelName: "Rain Maker", type: "Classification", status: "Active" },
      { modelName: "Cloud Surge", type: "Forecasting", status: "Inactive" },
      // Add more dummy data as needed
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "Model Name", accessor: "modelName" },
      { Header: "Model Type", accessor: "type" },
      { Header: "Description", accessor: "description" },
      { Header: "Created On", accessor: "createdon" },
      { Header: "last Trained On", accessor: " lasttrainedon" },
      { Header: "Status", accessor: "status" },
      { Header: "Action", accessor: "action" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 2 }, // Set default page size
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="mt-6">
      <table
        {...getTableProps()}
        className="table-auto w-full border border-gray-300"
        aria-label="Data Table"
      >
        <thead className="bg-gray-200">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="p-4 border text-left font-semibold"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-t">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="p-4">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-gray-700">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </div>
        <div>
          <button
            onClick={previousPage}
            disabled={!canPreviousPage}
            className={`px-4 py-2 rounded mr-2 ${
              canPreviousPage
                ? "bg-indigo-600 text-white"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={!canNextPage}
            className={`px-4 py-2 rounded ${
              canNextPage
                ? "bg-indigo-600 text-white"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;

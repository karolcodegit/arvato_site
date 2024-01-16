import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { SortDescIcon } from "../Common/Icons/Icons";
import { BsSortUp } from "react-icons/bs";
import Box from "../Box/Box";
import Button from "../Button/Button";

const Table = ({ data, columns }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass an initial state for pageIndex
    },
    useSortBy,
    usePagination
  );

  return (
    <Box col>
      <table
        {...getTableProps()}
        className="min-w-full border-collapse divide-y divide-gray-200"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-6 py-3 text-left text-xxs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <SortDescIcon className="flex" />
                      ) : (
                        <BsSortUp />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-gray-200 tableBody"
        >
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="font-medium text-gray-500 text-xs py-4 whitespace-nowrap"
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="px-6 py-4 whitespace-nowrap"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="px-6 pt-3 border-t border-gray-200">
      <div className="flex  items-center justify-between mt-4 w-full">
        <span className="text-gray-700 text-sm ">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <div>
          <Button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="first:mr-2 last:ml-2 px-4 py-2 rounded "
          >
            {"<"}
          </Button>
          <Button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="first:mr-2 last:ml-2 px-4 py-2 bg-sky-800 text-white rounded hover:bg-blue-700 "
          >
            {">"}
          </Button>
        </div>

        {/* <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            className="ml-2 border rounded"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select> */}

        </div>
      </div>
    </Box>
  );
};

export default Table;

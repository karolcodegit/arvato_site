import React from "react";
import { useTable, useSortBy, usePagination, useGlobalFilter } from "react-table";
import { useLocation } from "react-router-dom";
import { SearchIcon, SortDescIcon } from "../Common/Icons/Icons";
import { BsSortUp } from "react-icons/bs";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Input from "../Input/Input";
import UserRole from "../Common/UserRole/UserRole";
import EnterBarcode from "../Common/EnterBarcode/EnterBarcode";

const Table = ({ data, columns, role, barcodes, setBarcodes }) => {
  const location = useLocation();
  let AddValidate;

  switch(location.pathname){
    case '/users':
      AddValidate = <UserRole roles={role} />;
      case '/reprintlabel':
      // AddValidate = <EnterBarcode barcodes={barcodes} setBarcodes={setBarcodes}/>;
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setGlobalFilter,
    state: { pageIndex, globalFilter },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass an initial state for pageIndex
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  return (
    <>
    
    <Box col>
        
        <div className="flex items-center justify-between gap-8">
          <div>
              
               {AddValidate}
              

          </div>
          <div className="w-full md:w-72">
            <div className="relative w-full">
            <Input
              value={globalFilter || ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder={`Search all fields`}
              icon={SearchIcon}
            />
            </div>
          </div>
        </div>
      </Box>
      <table
        {...getTableProps()}
        className="min-w-full border-collapse divide-y divide-gray-200 rounded-sm"
      >
        <thead className="bg-white/90">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="p-4 text-left text-xxs font-semibold text-gray-700 uppercase tracking-wider"
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
      {data.length === 10 && (
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
      )}
    </>
  );
};

export default Table;

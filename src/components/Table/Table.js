import React, { useState } from "react";
import { GoSortDesc } from "react-icons/go";
import Paragraph from "../Paragraph/Paragraph";

// function Table({ data, columns, actions }) {
function Table({ headerComponent, headers, data }) {
  return (
    <div className="relative flex flex-col w-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
        {headerComponent}

        <div className="p-6 px-0 overflow-scroll">
          <table className="w-full table-auto mt-4 text-left min-w-max">
            {/* Head */}
            <thead className="w-full">
              <tr>
                {headers.map((header) => (
                  <th className="p-4 transition-colors cursor-pointer border-y text-white border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50 ">
                    <p className="flex items-center justify-start gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      {header}
                      <GoSortDesc />
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            {/* Body */}
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.entries(row).map(([key, value], cellIndex) => (
                    <td
                      key={cellIndex}
                      className="p-4 border-b border-blue-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        {key === "button" ? (
                          value
                        ) : (
                          <Paragraph>{value}</Paragraph>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between p-4 border-t border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Page 1 of 10
          </p>
          <div className="flex gap-2">
            <button
              className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Previous
            </button>
            <button
              className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;

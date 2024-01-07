import React from "react";

const HeaderTable = ({ columns }) => (
  <thead className="align-bottom">
    <tr>
      {columns.map((column) => (
        <th
          key={column.label}
          className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-gray opacity-70"
        >
          {column.label}
        </th>
      ))}
    </tr>
  </thead>
);

export default HeaderTable;

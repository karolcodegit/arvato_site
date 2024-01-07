import React, { useState } from 'react'

import Button from '../Button/Button';

const TD_CLASSNAME = "p-4 border-b border-blue-gray-50";

const TableRow = ({ row, columns, actions, selectedRows, setSelectedRows }) => {

    const handleSelectRow = (id) => {
        if (selectedRows.includes(id)) {
          setSelectedRows(prevSelectedRows => prevSelectedRows.filter((rowId) => rowId !== id));
        } else {
          setSelectedRows(prevSelectedRows => [...prevSelectedRows, id]);
        }
      };

  return (
    <tr>
        <td className={TD_CLASSNAME}>
        <input
            type="checkbox"
            onChange={() => handleSelectRow(row.id)}
            checked={selectedRows.includes(row.id)}
        />
        </td>
        <td className={TD_CLASSNAME}>
            {row.id+1}
        </td>
        {columns.map((column) => (
        <td className={TD_CLASSNAME} key={column.key}>
            {row[column.key]}
        </td>
        ))}
        <td className={TD_CLASSNAME}>
        {actions.map((action) => (
            <Button key={action.label} onClick={() => action.onClick(row)}>
                {action.label}
            </Button>
        ))}
        </td>
    </tr>
  )
}

export default TableRow
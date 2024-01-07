import React from 'react'
import { Typography } from '@material-tailwind/react';

const TH_CLASSNAME = "border-b border-blue-gray-100 bg-blue-gray-50 p-4";

const TableHeader = ({children}) => {
  return (
    <th className={TH_CLASSNAME}>
        <Typography
            variant="small"
            color="blue-gray"
            className="font-normal leading-none opacity-70"
        >
            {children}
        </Typography>
    </th>
  )
}

export default TableHeader
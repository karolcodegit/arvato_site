import React, { useContext } from "react";
import TableCell from "../TableCell/TableCell";
import Button from "../Button/Button";
import { RiEdit2Fill } from "react-icons/ri";



const BodyTable = ({ carrierIcons, data, onEdit }) => {
  return (
    <tbody>
      {data.map((transport) => (
        <tr key={transport.id}>
          <TableCell>
            {transport.Date}
          </TableCell>
          <TableCell>{transport.Carrier}</TableCell>
          <TableCell>{transport.Carrier_Number}</TableCell>
          <TableCell>{transport.License_Truck}</TableCell>
          <TableCell>{transport.License_Trailer}</TableCell>
          {/* <TableCell>{transport.hour}</TableCell> */}
          <TableCell isButton>{transport.Status}</TableCell>
          <TableCell>{transport.Pager}</TableCell>
          <TableCell><Button onClick={() => onEdit(transport)}><RiEdit2Fill /></Button></TableCell>
        </tr>
      ))}
    </tbody>
  );
};

export default BodyTable;

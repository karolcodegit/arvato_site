import React from "react";
import TableCell from "../TableCell/TableCell";
import Button from "../Button/Button";
import { RiEdit2Fill } from "react-icons/ri";


const BodyTable = ({ data, carrierIcons, onEdit }) => {
  
  

  return (
    <tbody>
      {data.map((transport) => (
        <tr key={transport.id}>
          <TableCell>
              {transport.date}
          </TableCell>
          <TableCell>{transport.carrier}</TableCell>
          <TableCell>{transport.transportNumber}</TableCell>
          <TableCell>{transport.tractorNumber}</TableCell>
          <TableCell>{transport.trailerNumber}</TableCell>
          {/* <TableCell>{transport.hour}</TableCell> */}
          <TableCell isButton>{transport.status}</TableCell>
          <TableCell>{transport.pager}</TableCell>
          
            <Button onClick={() => onEdit(transport)}><RiEdit2Fill /></Button>
          
        </tr>
      ))}
    </tbody>
  );
};

export default BodyTable;

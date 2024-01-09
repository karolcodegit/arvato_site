import React, { useContext } from "react";
import TableCell from "../TableCell/TableCell";
import Button from "../Button/Button";
import { RiEdit2Fill } from "react-icons/ri";
import { TransportContext } from "../../TransportContext/TransportContext";


const BodyTable = ({ carrierIcons, data, onEdit }) => {
  
  

  return (
    <tbody>
      {data.map((transport) => (
        <tr key={transport.id}>
          <TableCell>
              {transport.Date}
          </TableCell>
          <TableCell>{transport.Carrier || 'N/A'}</TableCell>
          <TableCell>{transport.Carrier_Number || 'N/A'}</TableCell>
          <TableCell>{transport.License_Truck || 'N/A'}</TableCell>
          <TableCell>{transport.License_Trailer || 'N/A'}</TableCell>
          {/* <TableCell>{transport.hour}</TableCell> */}
          <TableCell isButton>{transport.Status || 'N/A'}</TableCell>
          <TableCell>{transport.Pager || 'N/A'}</TableCell>
          
            <Button onClick={() => onEdit(transport)}><RiEdit2Fill /></Button>
          
        </tr>
      ))}
    </tbody>
  );
};

export default BodyTable;

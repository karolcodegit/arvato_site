// import React, { useMemo, useState } from "react";
// import { renderToString } from "react-dom/server";

// import Box from "../../components/Box/Box";
// import Button, { EditButton } from "../../components/Button/Button";
// import Input from "../../components/Input/Input";
// import Title from "../../components/Common/Title/Title";
// import { TfiWrite } from "react-icons/tfi";
// import { CiSearch } from "react-icons/ci";
// import { MdDeleteOutline } from "react-icons/md";
// import Table from "../../components/Table/Table";
// import EnterBarcode from "../../components/Common/EnterBarcode/EnterBarcode";

// const ReprintLabel = () => {
//   const [barcodes, setBarcodes] = useState([]);

//   const columns = useMemo(
//     () => [
//       {
//         Header: "Barcode",
//         accessor: "Barcode",
//       },
//       {
//         Header: 'Actions',
//         accessor: 'actions',
//         Cell: ({ index }) => (
//           <button onClick={() => DeleteBarcode(index)}>
//             Delete
//           </button>
//         )
//       },
//     ],
//     []
//   );


//   const DeleteBarcode = (index) => {
//     setBarcodes(barcodes.filter((_, i) => i !== index));
//   };
  
//   const handlePrintAll = () => {
//     const printWindow = window.open("", "_blank");
//     printWindow.document.write(
//       "<html><head><title>Print All</title></head><body>"
//     );
//     printWindow.document.write(
//       '<div style="width: 21cm; height: 29.7cm; margin: 0 auto;">'
//     );
//     barcodes.forEach((barcode, index) => {
//       const barcodeComponent = renderToString(
//         <BarcodeWithNumber barcode={barcode} />
//       );
//       printWindow.document
//         .write(`<div style="width: 7cm; height: 4cm; border: 1px solid black; margin-bottom: 1cm;">
//         ${barcodeComponent}
//       </div>`);
//     });
//     printWindow.document.write("</div></body></html>");
//     printWindow.document.close();
//     printWindow.print();
//   };


//   const actions = [
//     {
//       label: <MdDeleteOutline />,
//       onClick: (index) => {
//         DeleteBarcode(index)
             
//       },
//     },
//   ];
//   return (
//     <>
//       <Box>
//         <div className="p-6 pb-0 mb-5 border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex justify-between items-center">
//           <Title tag="h5">Reprint label</Title>
//           <Button onClick={handlePrintAll} className="whitespace-nowrap py-3">
//             Print All
//           </Button>
//         </div>
//       </Box>
//       <Box margin="my-8">
//         <div className="flex items-center py-5 justify-between space-x-5">
          

          
//         </div>
//       </Box>

//       <Table columns={columns} data={barcodes} showActions={true} />
//     </>
//   );
// };

// export default ReprintLabel;

import React from 'react'

const ReprintLabel = () => {
  return (
    <div>ReprintLabel</div>
  )
}

export default ReprintLabel
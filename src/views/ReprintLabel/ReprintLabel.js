import React, { useMemo, useState } from "react";
import { renderToString } from "react-dom/server";

import Box from "../../components/Box/Box";
import Button, { EditButton } from "../../components/Button/Button";
import Title from "../../components/Common/Title/Title";
import { MdDeleteOutline } from "react-icons/md";

import EnterBarcode, { BarcodeWithNumber } from "../../components/Common/EnterBarcode/EnterBarcode";
import Table from "../../components/Common/Table/Table";

const ReprintLabel = () => {
  const [barcodes, setBarcodes] = useState([]);
  const columns = useMemo(
    () => [
      {
        Header: "Lp",
        accessor: "id",
      },
      {
        Header: "Barcode",
        accessor: "barcode",
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ index }) => ( 
          <button onClick={() => DeleteBarcode(index)}>
            Delete
          </button>
        )
      },
    ],
    []
  );
  const DeleteBarcode = (index) => {
    setBarcodes(barcodes.filter((_, i) => i !== index));
  };
  
  const handlePrintAll = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(
      "<html><head><title>Print All</title></head><body>"
    );
    printWindow.document.write(
      '<div style="width: 21cm; height: 29.7cm; margin: 0 auto;">'
    );
    barcodes.forEach((barcode) => {
      const barcodeComponent = renderToString(
        <BarcodeWithNumber barcode={barcode} />
      );
      printWindow.document
        .write(`<div style="width: 7cm; height: 4cm; border: 1px solid black; margin-bottom: 1cm;">
        ${barcodeComponent}
      </div>`);
    });
    printWindow.document.write("</div></body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <>
      <Box col>
        <div className="p-6 pb-0 mb-5 border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex justify-between items-center">
          <Title tag="h5">Reprint label</Title>
          <Button onClick={handlePrintAll} className="whitespace-nowrap py-3">
            Print All
          </Button>
        </div>
      </Box>

      <Table columns={columns} data={barcodes} showActions={true} setBarcodes={setBarcodes} />
    </>
  );
};

export default ReprintLabel;

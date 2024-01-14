import React, { useCallback, useMemo, useState } from "react";
import { renderToString } from "react-dom/server";
import bwipjs from "bwip-js";
import Box from "../../components/Box/Box";
import Button, { EditButton } from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Title from "../../components/Common/Title/Title";
import { TfiWrite } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import UniversalTable from "../../components/UniversalTable/UniversalTable";
import { MdDeleteOutline } from "react-icons/md";

const ReprintLabel = () => {
  // const columns = useMemo(() => [{ label: "Barcode", key: "barcode" }], []);
  const headers = ["Barcode"];
  const [barcodes, setBarcodes] = useState([]);


  const DeleteBarcode = (index) => {
    setBarcodes(barcodes.filter((_, i) => i !== index));
  };
  const handleScan = useCallback(
    (e) => {
      let barcode = e.target.value;
      if (barcode.length === 19) {
        const checkDigit = calculateCheckDigit(barcode);
        barcode = barcode.slice(0, -1) + checkDigit;
        setBarcodes([...barcodes, { id: barcodes.length, barcode }]);
        setTimeout(() => {
          //more time to empty input field
          e.target.value = ""; // reset input field
        }, 0);
      }
    },
    [barcodes]
  );
  const calculateCheckDigit = useCallback((barcode) => {
    //pomijanie ostatniej cyfry
    const digits = barcode.slice(0, -1).split("").map(Number);

    //Mnożenie każdej cyfry przez odpowiednią wagę

    const weightedSum = digits.reduce((sum, digit, index) => {
      const weight = index % 2 === 0 ? 1 : 3;
      return sum + digit * weight;
    }, 0);

    // Sumę wyników mnożenia dzielimy przez 10 i zaokrąglamy w górę do najbliższej dziesiątki
    const roundedSum = Math.ceil(weightedSum / 10) * 10;

    // Otrzymaną wartość odejmujemy od sumy ważonej
    const checkDigit = roundedSum - weightedSum;

    return checkDigit;
  }, []);

  const BarcodeWithNumber = ({ barcode }) => {
    const barcodeImage = GenerateBarcode({ barcode });
  };

  const GenerateBarcode = ({ barcode }) => {
    const canvas = document.createElement("canvas");
    bwipjs.toCanvas(canvas, {
      bcid: "code128", // Barcode type
      text: barcode.barcode, // Text to encode
      scale: 1, // 3x scaling factor
      height: 6, // Bar height, in millimeters
      includetext: true, // Show human-readable text
      textxalign: "center", // Always good to set this
    });
    const barcodeImage = canvas.toDataURL("image/png");
    return barcodeImage;
  };

  const handlePrintAll = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(
      "<html><head><title>Print All</title></head><body>"
    );
    printWindow.document.write(
      '<div style="width: 21cm; height: 29.7cm; margin: 0 auto;">'
    );
    barcodes.forEach((barcode, index) => {
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


  const actions = [
    {
      label: <MdDeleteOutline />,
      onClick: (index) => {
        DeleteBarcode(index)
             
      },
    },
  ];

  

  return (
    <>
      <Box>
        <div className="p-6 pb-0 mb-5 border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex justify-between items-center">
          <Title tag="h5">Reprint label</Title>
        </div>
      </Box>
      <Box margin="my-8">
        <div className="flex items-center py-5 justify-between space-x-5">
          <Input
            icon={TfiWrite}
            type="text"
            onChange={handleScan}
            placeholder="Scan barcode here..."
            className="flex-grow"
          />

          <Button onClick={handlePrintAll} className="whitespace-nowrap py-3">
            Print All
          </Button>
        </div>
      </Box>

      <UniversalTable
        headers={headers}
        data={barcodes}
        onAddButtonClick
        actions={actions}
       
      />
    </>
  );
};

export default ReprintLabel;

// import React, { useCallback, useState } from "react";
// import Input from "../../Input/Input";
// import { TfiWrite } from "react-icons/tfi";
// import bwipjs from "bwip-js";

// const EnterBarcode = ({barcodes, setBarcodes}) => {
 
//   const handleScan = useCallback(
//     (e) => {
//       let barcode = e.target.value;
//       if (barcode.length === 19) {
//         const checkDigit = calculateCheckDigit(barcode);
//         barcode = barcode.slice(0, -1) + checkDigit;
//         setBarcodes([...barcodes, { id: barcodes.length, barcode }]);
//         setTimeout(() => {
//           //more time to empty input field
//           e.target.value = ""; // reset input field
//         }, 0);
//       }
//     },
//     [barcodes]
//   );
//   const calculateCheckDigit = useCallback((barcode) => {
//     //pomijanie ostatniej cyfry
//     const digits = barcode.slice(0, -1).split("").map(Number);

//     //Mnożenie każdej cyfry przez odpowiednią wagę

//     const weightedSum = digits.reduce((sum, digit, index) => {
//       const weight = index % 2 === 0 ? 1 : 3;
//       return sum + digit * weight;
//     }, 0);

//     // Sumę wyników mnożenia dzielimy przez 10 i zaokrąglamy w górę do najbliższej dziesiątki
//     const roundedSum = Math.ceil(weightedSum / 10) * 10;

//     // Otrzymaną wartość odejmujemy od sumy ważonej
//     const checkDigit = roundedSum - weightedSum;

//     return checkDigit;
//   }, []);
//   const BarcodeWithNumber = ({ barcode }) => {
//     const barcodeImage = GenerateBarcode({ barcode });
//     return <img src={barcodeImage} alt={barcode} />;
//   };

//   const GenerateBarcode = ({ barcode }) => {
//     const canvas = document.createElement("canvas");
//     bwipjs.toCanvas(canvas, {
//       bcid: "code128", // Barcode type
//       text: barcode.barcode, // Text to encode
//       scale: 1, // 3x scaling factor
//       height: 6, // Bar height, in millimeters
//       includetext: true, // Show human-readable text
//       textxalign: "center", // Always good to set this
//     });
//     const barcodeImage = canvas.toDataURL("image/png");
//     return barcodeImage;
//   };
//   return (
//     <Input
//       icon={TfiWrite}
//       type="text"
//       onChange={handleScan}
//       placeholder="Scan barcode here..."
//       className="flex-grow"
//     />
//   );
// };

// export default EnterBarcode;

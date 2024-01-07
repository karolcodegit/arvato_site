// Preview.js
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import QRCode from 'qrcode.react';

const Preview = ({ zone, location1, location2, location3 }) => {
    const fullLocation = `${zone} ${location1} ${location2} ${location3}`;

  return (
    <div className="flex flex-col h-full justify-between items-center border-l-2 p-2 print:block">
      <span className="text-xl">Preview</span>
      <QRCode value={fullLocation} size={80} className="self-center" />
      <div className="flex items-center">
        <FaArrowUpLong />
        <span className="pl-2">{fullLocation}</span>
      </div>
    </div>
  );
};

export default Preview;
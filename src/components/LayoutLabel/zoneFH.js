import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import QRCode from "qrcode.react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const zoneFH = ({ zone, location1, location2, location3 }) => {
  const fullLocation = `${zone} ${location1} ${location2} ${location3}`;

  return (
    <div>
      <FaArrowUpLong size={24} />
      <QRCode value={fullLocation} size={80} />
      <div className="flex items-center">
        <FaArrowUpLong />
        <span className="pl-2">{fullLocation}</span>
      </div>
    </div>
  );
};

export default zoneFH;

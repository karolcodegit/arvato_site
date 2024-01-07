import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import QRCode from 'qrcode.react';

const zoneU = ({ zone, location1, location2, location3 }) => {
const fullLocation = `${zone} ${location1} ${location2} ${location3}`;
  return (
    <div className="w-48 h-48 border border-black flex flex-col items-center justify-center !print:block">
      <QRCode value={fullLocation} size={64} />
      <div className='flex'>
        <FaArrowUpLong size={32} className="text-black text-3xl" />
        <div>
            <p className="text-sm">{zone } {location1}</p>
            <p className="text-sm">{location2} {location3}</p>
        </div>
      </div>
    </div>
  
  )
}

export default zoneU
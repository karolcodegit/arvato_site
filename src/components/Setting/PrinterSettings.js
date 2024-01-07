import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const PrinterSettings = () => {
    return (
      <div className="w-full">
        <div className="flex flex-col px-3 py-4">
          <div className="flex items-center">
            
            <span>Settings</span>{" "}
            <span className="px-2">
              <IoIosArrowForward />
            </span>
            <span>Print</span>
          </div>
          <div className="py-2 border-b border-gray-300 mt-7">General</div>
          <div className="py-2 border-b border-gray-300 mt-7">
            <span className="font-bold">Default settings</span>
          </div>
          <div className="flex justify-between py-8 border-b border-gray-300">
            <span>Add printer</span>
            <div>
              <span>Change logo</span>
            </div>
          </div>
          <div className="flex justify-between py-8 border-b border-gray-300">
            <span>Branding</span>
            <div>
              <span>Change logo</span>
            </div>
          </div>
          <div className="flex justify-between py-8 border-b border-gray-300">
            <span>Branding</span>
            <div>
              <span>Change logo</span>
            </div>
          </div>
          <div className="flex justify-between py-8 border-b border-gray-300">
            <span>Branding</span>
            <div>
              <span>Change logo</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default PrinterSettings
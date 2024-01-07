import React from 'react'
import { FcMultipleDevices } from "react-icons/fc";


const Categories = () => {
  return (
    <div className="border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
        <div className="p-4 pb-0 rounded-t-4">
        <h6 className="mb-0 dark:text-white">Categories</h6>
        </div>
        <div className="flex-auto p-4">
            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit">
                <div className="flex items-center">
                    <div className="inline-block mr-4 text-center">
                    <FcMultipleDevices className="text-3xl text-white" />
                    </div>
                    <div className="flex flex-col">
                    <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">
                        Devices
                    </h6>
                    <span className="leading-tight dark:text-white/80 text-xs">
                        250 in stock,{" "}
                        <span className="font-semibold">346+ sold</span>
                    </span>
                    </div>
                </div>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Categories
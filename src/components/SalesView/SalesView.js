import React from 'react'
import { IoArrowUpOutline } from "react-icons/io5";

const SalesView = () => {
  return (
    <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
        <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
            <h6 className="capitalize dark:text-white">Sales overview</h6>
            <p className="mb-0 flex items-center leading-normal dark:text-white dark:opacity-60 text-sm">
                <IoArrowUpOutline className="text-lg" />
                <span className="font-semibold">4% more in 2021</span> 
            </p>
            </div>
            <div className="flex-auto p-4">
            <div></div>
        </div>
    </div>
  )
}

export default SalesView
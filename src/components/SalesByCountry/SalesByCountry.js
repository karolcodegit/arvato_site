import React from 'react'   
import { FaFlagUsa } from "react-icons/fa";

const country = [
    {
        name: 'United States',
        flag: <FaFlagUsa />,
        sales: 2500,
        value: 230900,
        procent: 29.9,
    }
]

const SalesByCountry = () => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-950 border-black-125 rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 rounded-t-4">
        <div className="flex justify-between">
            <h6 className="mb-2 dark:text-white">Sales by Country</h6>
        </div>
        </div>
        <div className="overflow-x-auto">
        <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
            <tbody>
            {country.map((item, index) => (
                <tr>
                    <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                        <div className="flex items-center px-2 py-1">
                            <div>
                            {item.flag}
                            </div>
                            <div className="ml-6">
                                <p className="mb-0 font-semibold leading-tight dark:text-white text-xs dark:opacity-60">
                                    Country:
                                </p>
                                <h6 className="mb-0 leading-normal text-sm dark:text-white">
                                    {item.name}
                                </h6>
                            </div>
                        </div>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                        <div className="flex items-center px-2 py-1">
                            <div className="ml-6">
                                <p className="mb-0 font-semibold leading-tight dark:text-white text-xs dark:opacity-60">
                                    Sales:
                                </p>
                                <h6 className="mb-0 leading-normal text-sm dark:text-white">
                                    {item.sales}
                                </h6>
                            </div>
                        </div>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                        <div className="flex items-center px-2 py-1">
                            <div className="ml-6">
                                <p className="mb-0 font-semibold leading-tight dark:text-white text-xs dark:opacity-60">
                                    Value:
                                </p>
                                <h6 className="mb-0 leading-normal text-sm dark:text-white">
                                    {item.value}zł
                                </h6>
                            </div>
                        </div>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                        <div className="flex items-center px-2 py-1">
                            <div className="ml-6">
                                <p className="mb-0 font-semibold leading-tight dark:text-white text-xs dark:opacity-60">
                                Bounce:
                                </p>
                                <h6 className="mb-0 leading-normal text-sm dark:text-white">
                                    {item.procent}%
                                </h6>
                            </div>
                        </div>
                    </td>
                </tr> 
            ))}
            
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default SalesByCountry
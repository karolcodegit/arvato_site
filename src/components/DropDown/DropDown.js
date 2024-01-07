import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({items, children}) => {
  return (
    <div className="ring-offset-black ring-black shadow-black shadow-lg bg-white rounded-md origin-top orgin-right w-56 z-10 absolute top-full right-0">
        <div className="py-1">
            {children}
            {items.map((item, index) => (
            <Link key={index} to={item.path} className="text-gray-700 text-sm leading-5 py-2 px-4 items-center flex" onClick={item.onClick}>
                {item.icon}
                <span>{item.text}</span>
            </Link>
            ))}
        </div>
    </div>
  );
};

export default DropDown;

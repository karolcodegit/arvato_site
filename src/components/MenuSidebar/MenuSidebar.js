import React, { useState } from "react";
import { menu } from "../../data/Menu";
import { Link } from "react-router-dom";
import { DownIcon, UpIcon } from "../Common/Icons/Icons";

const MenuSidebar = ({ toggle }) => {
  const [expandedGroup, setExpandedGroup] = useState(null);

  const handleGroupClick = (groupTitle) => {
    if (expandedGroup === groupTitle) {
      setExpandedGroup(null);
    } else {
      setExpandedGroup(groupTitle);
    }
  };
  return (
    <div className="h-[500px] overflow-y-auto">
      {menu.map((group) => {
        return (
          <div key={group.title}>
            <div
              onClick={() => handleGroupClick(group.title)}
              className="flex justify-between items-center relative w-full cursor-pointer text-gray-300 bg-transparent py-3 px-7 align-middle leading-7 rounded-xl text-bold transition-all duration-500 ease-in-out hover:bg-white/10 hover:text-white text-sm"
            >
              <div className="flex items-center align-middle ">
                {group.icon}
                <span className={`${toggle ? "hidden" : "ml-3"}`}>
                  {group.title}
                </span>
              </div>
              <div>
                {!toggle ? (
                  expandedGroup === group.title ? (
                    <UpIcon className="h-4 w-4 text-gray-300" />
                  ) : (
                    <DownIcon className="h-4 w-4 text-gray-300" />
                  )
                
                ) : null}
                
              </div>
            </div>
            {expandedGroup === group.title &&
              group.routes.map((route) => {
                if (route.showInSidebar) {
                  return (
                    <div
                      key={route.title}
                      className={`flex justify-between items-center relative w-full cursor-pointer text-gray-300 bg-transparent py-3 px-7 align-middle leading-7 rounded-xl text-bold transition-all duration-500 ease-in-out hover:bg-white/10 hover:text-white text-sm ${
                        toggle ? "" : " "
                      }`}
                    >
                      <Link
                        to={route.path}
                        className="w-full flex items-center text-center pl-7"
                      >
                        <div className={`${toggle ? "hidden" : ""}`}>
                          {route.title}
                        </div>
                      </Link>
                    </div>
                  );
                }
                return null;
              })}
          </div>
        );
      })}
    </div>
  );
};

export default MenuSidebar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { FaRobot } from "react-icons/fa";
import { routes } from "../../data/routes";
import Title from "../Title/Title";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Sidebar = ({isCollapsed,toggleSidebar}) => {
  
  return (
    <aside
      className={`fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-all duration-500 ease-in-out dark:bg-gray-900 border-0 dark:shadow-none bg-white ${
        isCollapsed ? "max-w-20" : "max-w-64"
      } ease-nav-brand  xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0 shadow-xl`}
    >
      <div className={`h-32 ${isCollapsed ? "hidden" : "block"}`}>
        <div className="flex flex-col items-center justify-center py-4">
          <img
            className="w-10 h-10 mx-auto mb-4"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500"
            alt="Your Company"
          />
          <Title tag="h3">CodeCraft</Title>
        </div>
      </div>
      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
      <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
        <ul
          className={`flex flex-col pl-0 mb-0 justify-center items-center ${
            isCollapsed ? "h-full" : ""
          }`}
        >
          {routes.map(
            (item) =>
              item.showInSidebar && (
                <SidebarItem
                  key={item.title}
                  links={item.path}
                  Icon={item.icon}
                  text={isCollapsed ? "" : item.title}
                />
              )
          )}
        </ul>
      </div>
      <div className={`${isCollapsed ? "hidden" : "mx-4 block"}`}>
        <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border text-center items-center">
          <FaRobot className="text-5xl" />
          <div className="flex-auto w-full p-4 pt-0 text-center">
            <div className="transition-all duration-200 ease-nav-brand">
              <h6 className="mb-0 dark:text-white text-white">Need help?</h6>
              <p className="mb-0 font-semibold leading-tight dark:text-white dark:opacity-60 text-xs">
                Please talk with bot
              </p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={toggleSidebar} className="absolute bottom-0 right-0 m-4">
        {isCollapsed ? (
          <FaChevronRight className="animate-bounce" />
        ) : (
          <FaChevronLeft className="animate-pulse" />
        )}
      </button>
    </aside>
  );
};

export default Sidebar;

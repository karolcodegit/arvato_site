import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ links, Icon, text }) => {
  return (
    <>
      <li className="mt-0.5 w-full">
        <Link
          className="py-2 bg-blue-500/13 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
          to={links}
        >
          <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
            {Icon}
          </div>
          <span className="antialiased ml-1 duration-300 opacity-100 pointer-events-none ease">
            {text}
          </span>
        </Link>
      </li>
    </>
  );
};

export default SidebarItem;

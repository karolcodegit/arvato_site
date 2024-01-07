import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-4 bottom-0 w-full">
      <div className="w-full px-6 mx-auto">
        <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
          <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
            <div className="leading-normal text-center text-sm text-slate-500 lg:text-left">
              2023 - {new Date().getFullYear()}, made by{" "}
              <a
                href="/"
                className="font-semibold text-slate-700 dark:text-white"
                target="_blank"
              >
                {" "}Karol Znojkiewicz
              </a>
            </div>
          </div>
          <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
            <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
              <li className="nav-item">
                <Link
                  to="/"
                  className="block px-4 pt-0 pb-1 font-normal transition-colors ease-in-out text-sm text-slate-500"
                  target="_blank"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="block px-4 pt-0 pb-1 font-normal transition-colors ease-in-out text-sm text-slate-500"
                  target="_blank"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

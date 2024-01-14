import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-white py-8 px-8">
  <div className="container mx-auto flex flex-wrap justify-between items-center">
    <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
      <span className="text-sm">
        2023 - {new Date().getFullYear()}, {" "}
        <a
          href="/"
          className="font-bold text-white hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Karol Znojkiewicz
        </a>
      </span>
    </div>
    <div className="w-full sm:w-1/2">
      <ul className="flex text-sm justify-center sm:justify-end space-x-4">
        <li>
          <Link
            to="/"
            className="text-white hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-white hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </Link>
        </li>
      </ul>
    </div>
  </div>
</footer>
  );
};

export default Footer;

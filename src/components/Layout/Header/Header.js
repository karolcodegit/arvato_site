import React from "react";
import { BiMenu } from "react-icons/bi";
import Logo from "../../Common/Logo/Logo";
import Pagination from "../../Common/Pagination/Pagination";
import Search from "../../Common/Search/Search";
import HeaderMenuIcons from "../../Common/HeaderMenuIcons/HeaderMenuIcons";

const Header = ({ toggleSidebar,toggle }) => {
  return (
    <>
      <div className="hidden md:flex justify-between pl-0 mb-0 w-full ml-6 pr-10">
        <div>
          <Pagination />
        </div>

        <div className="flex items-center">
          <div>
            <Search />
          </div>
          <div className="flex">
            <HeaderMenuIcons />
          </div>
        </div>
      </div>

      <div className="md:hidden cursor-pointer text-xl text-gray-100 w-full">
        <div className="flex justify-between">
          <Logo toggle={toggle} toggleSidebar={toggleSidebar} />
          <button onClick={toggleSidebar}>
            <BiMenu />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

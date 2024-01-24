import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import UserProfile from "../../Common/UserProfile/UserProfile";
import MenuSidebar from "../../MenuSidebar/MenuSidebar";
import Logo from "../../Common/Logo/Logo";

const Sidebar = ({ toggleSidebar, showSidebar, toggle, setToggle }) => {
  return (
    <aside
      className={`fixed xl:fixed max-w-xl:absolute z-50 ${
        toggle ? "w-[5rem]" : "w-[15rem]"
      } sidebar-container xl:flex flex-col justify-between ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } m-0 p-0 xl:translate-x-2`}
    >
      <div>
        <div
          className="absolute top-[5rem] flex  items-center -left-5 w-10 h-10 justify-center rounded-full bg-white cursor-pointer "
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <BiChevronLeft
            className={`${
              toggle ? "rotate-180" : ""
            } text-3xl transition-all duration-300`}
          />
        </div>
        <Logo toggleSidebar={toggleSidebar} toggle={toggle} />
        <MenuSidebar toggle={toggle} />
      </div>
      <UserProfile toggle={toggle} />
    </aside>
  );
};

export default Sidebar;

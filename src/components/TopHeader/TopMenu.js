import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline, IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../utils/AuthLogout";
import DropDown from "../DropDown/DropDown";

const TopMenu = () => {
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen)
  }

  const menuTopHeader = [
    {
      name: "Home",
      icon: <FaUser />,
      action: toggleUserMenu
    },
    {
      name: "settings",
      link: "/setting",
      icon: <CiSettings />,
      action: () => {},
    },
    {
      name: "Notifications",
      link: "/notifications",
      icon: <IoIosNotificationsOutline />,
      action: () => {},
    },
  ];
  return (
    <>
    {menuTopHeader.map((item) => (
    <li className="flex items-center px-2 relative" key={item.name}>
        <div className="block font-semibold text-white transition-all ease-nav-brand text-lg">
            {item.name === "Logout" ? (
            <Link to={item.link} onClick={item.action} className="cursor-pointer">
                {item.icon}
            </Link>
            ) : (
            <div className="cursor-pointer" onClick={item.action}>
                {item.icon}
            </div>
            )}
        </div>

      {
        item.name === "Home" && isUserMenuOpen && (
            <DropDown items={[
                
                {
                    text: "Logout",
                    icon: <IoMdLogOut />,
                    path: "/logout",
                    onClick: handleLogout
                }
                
            ]}>
                <div className="py-2 flex flex-col text-gray-700 text-sm leading-5 py-2 px-4">
                    <span>Signed in as</span>
                    <span>karol.znojkiewicz@outlook.com</span>
                </div>
            </DropDown>
        )
      }
      </li>
    ))}
</>
  );
};

export default TopMenu;

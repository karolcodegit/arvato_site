import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropDown from "../../DropDown/DropDown";
import SettingPanel from "../../SettingPanel/SettingPanel";
import { LogoutIcon, NotificationIcon, SettingsIcon, UserIcon } from "../Icons/Icons";
import { logoutUser } from "../../../services/firebase/Auth";

const HeaderMenuIcons = () => {
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };


  const toogleSetings = () => {
    setIsSettingsOpen(!isSettingsOpen)
  }

  const menuTopHeader = [
    {
      name: "Settings",
      link: "/setting",
      icon: <SettingsIcon />,
      action: toogleSetings
    },
    {
      name: "Notifications",
      link: "/notifications",
      icon: <NotificationIcon />,
      action: () => {},
    },
    {
      name: "Logout",
      link: "/login",
      icon: <LogoutIcon />,
      action: handleLogout,
    }
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
        item.name === "User" && isUserMenuOpen && (
            <DropDown items={[
                
                {
                    text: "Logout",
                    icon: <LogoutIcon />,
                    path: "/logout",
                    onClick: handleLogout
                }
                
            ]}>
                <div className="w-full flex flex-col text-gray-700 text-sm leading-5 py-2 px-4">
                    
                </div>
            </DropDown>
        )
      }
      {
        item.name === 'Settings' && isSettingsOpen &&(
          <SettingPanel isSettingsOpen={isSettingsOpen} setIsSettingsOpen={setIsSettingsOpen}/>
        )
      }
      </li>
    ))}
</>
  );
};

export default HeaderMenuIcons;

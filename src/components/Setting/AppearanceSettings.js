import React, { useContext } from "react";
import Switch from "../Switch/Switch";
import { IoIosArrowForward } from "react-icons/io";
import { AppThemeContext } from "../../themes/AppThemeContext";

const AppearanceSettings = () => {
  const { theme, toggleTheme } = useContext(AppThemeContext);
  return (
    <div className="w-full">
      <div className="flex flex-col px-3 py-4">
        <div className="flex items-center">
          <span>Settings</span>{" "}
          <span className="px-2">
            <IoIosArrowForward />
          </span>
          <span>Appearance</span>
        </div>
        <div className="py-2 border-b border-gray-300 mt-7">General</div>
        <div className="py-2 border-b border-gray-300 mt-7">
          <span className="font-bold">Default settings</span>
        </div>
        <div className="flex justify-between py-8 border-b border-gray-300">
          <span>Themes</span>
          <div className="flex flex-col items-center space-y-4">
            <div>
              <p>Change themes</p>
            </div>
            <div className="flex">
              <span className="px-3">Light</span>
              <Switch checked={theme === "dark"} onChange={toggleTheme} label="Change background" />
              <span className="px-3">Dark</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-8 border-b border-gray-300">
          <span>Branding</span>
          <div>
            <span>Change logo</span>
          </div>
        </div>
        <div className="flex justify-between py-8 border-b border-gray-300">
          <span>Branding</span>
          <div>
            <span>Change logo</span>
          </div>
        </div>
        <div className="flex justify-between py-8 border-b border-gray-300">
          <span>Branding</span>
          <div>
            <span>Change logo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppearanceSettings;

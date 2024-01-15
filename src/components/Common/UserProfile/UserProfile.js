import React, { useContext, useState } from "react";
import { SettingsIcon } from "../Icons/Icons";
import { AuthContext } from "../../../services/firebase/Auth";

const UserProfile = ({ toggle }) => {
  const { currentUser, userDetails } = useContext(AuthContext);

  return (
    <>
    <div
        className={`transition-all duration-300 delay-200 ${
          toggle ? "bg-none" : "bg-gray-300 text-black rounded-2xl p-2 mx-0 my-0"
        }`}
      >
        <div className="flex items-center justify-between mx-0 my-0">
          <div className="flex items-center">
            <img
              src="https://github.com/identicons/jasonlong.png"
              alt="User Avatar"
              className="w-5 h-5 rounded-full object-cover mx-0 my-0"
            />
            {!toggle && userDetails && (
              <div className="flex flex-col text-xxs mx-2">
                <span>{userDetails.Name}{' '}{userDetails.Surname}</span>
                <span>{currentUser.email}</span>
              </div>
            )}
          </div>
        </div>
      </div>
     </>
  );
};

export default UserProfile;

import React, { useContext, useState } from "react";
import { AuthContext } from "../../../services/firebase/Auth";
import { SettingsIcon } from "../Icons/Icons";

const UserProfile = ({ toggle }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
    <div
      className={`transition-all duration-300 delay-200 ${
        toggle ? "bg-none" : "bg-gray-300 text-black rounded-2xl p-2 mx-0 my-0"
      }`}
    >
      <div className="flex items-center justify-between mx-0 my-0">
        <div className={`${toggle ? "justify-center mx-auto" : "mx-0 my-0"}`}>
          <img
            src=""
            alt="image"
            className="w-5 h-5 rounded-full object-cover mx-0 my-0"
          />
        </div>
        <div
          className={`${
            toggle ? "hidden" : "flex flex-col text-xxs mx-0 my-0"
          } `}
        >
          <span>{currentUser.name}{' '}{currentUser.surname}</span>
          <span>{currentUser.email}</span>
        </div>
        
       
      </div>
    </div>
     </>
  );
};

export default UserProfile;

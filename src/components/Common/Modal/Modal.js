import React from "react";
import { CloseIcon } from "../Icons/Icons";


const Modal = ({isOpen, onClose, children}) => {
    if(!isOpen) return null;
  return (
    <div
      role="alert"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition ease-in-out duration-150 container mx-auto w-11/12 md:w-2/3 max-w-lg "
    >
        <div className="relative py-8 px-5 md:px-10 bg-white dark:bg-slate-850 rounded-lg shadow-lg border border-gray">
            <div className="w-full flex justify-start text-gray mb-3">
                <button className="cursor-pointer absolute top-0 right-0 mt-5 mr-5 text-grayLight hover:text-grayDark transition duration-200 ease-in-out" aria-label="close modal" role='button'>
                    <CloseIcon onClick={onClose} className='w-4 h-4'/>
                </button>
                {children}
            </div>
        </div>
    </div>
  );
};

export default Modal;

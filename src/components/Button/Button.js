import React from "react";
import { BsPencil, BsTrash } from "react-icons/bs";

const Button = ({
  children,
  onClick,
  bg = "bg-sky-800",
  textColor = "text-white",
  width = "w-auto",
  type = "button",
  disabled = false,
  className = "",
  ...props
}) => {
  if(children == 'Save'){
    bg= 'bg-green-700'
  }
  if(children === 'Delate' && children === 'Yes'){
    bg='bg-red-500'
  }
  
  const buttonStyle = `${bg} ${width} ${textColor} inline-flex items-center justify-center relative outline-none border-none m-0 cursor-pointer text-white text-sm leading-5 px-6 py-4 box-shadow-none font-bold rounded-md hover:bg-indigo-900 transition `;
  
  return (
    <button
      type={type}
      onClick={onClick}
      bg={bg}
      disabled={disabled}
      className={`${buttonStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
const EditButton = () => <BsPencil />;
const DeleteButton = () => <BsTrash />;
export default Button;
export { EditButton, DeleteButton };

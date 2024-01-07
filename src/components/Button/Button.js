import React from "react";

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
  const buttonStyle = `text-sm py-2 px-8 font-bold rounded-lg border-0 transition duration-200 ease-in-out ${bg} ${textColor} ${width} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:bg-gray-700 active:bg-gray-800 ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonStyle}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

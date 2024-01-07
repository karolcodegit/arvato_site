import React from "react";

const Box = ({ children, margin, col, className = "" }) => {
  const boxStyle = `py-3 px-5 flex relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-gray-900 dark:shadow-dark-xl rounded-2xl bg-clip-border ${className} ${margin} ${
    col ? "flex-col" : "flex-row"
  }`;
  return <div className={boxStyle}>{children}</div>;
};

export default Box;

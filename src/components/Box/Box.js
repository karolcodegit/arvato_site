import React from "react";

const Box = ({ children, margin = "mb-8", col, className = "" }) => {
  const boxStyle = ` py-4 px-6 flex relative flex min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-2xl dark:bg-gray-900 dark:shadow-dark-xl rounded-xl bg-clip-border overflow-x-auto ${className} ${margin} ${
    col ? "flex-col" : "flex-row"
  }`;
  return <div className={boxStyle}>{children}</div>;
};

export default Box;

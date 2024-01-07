import React from "react";
import Input from "../Input/Input";

const Form = ({ children }) => {
  return (
    <form className="w-full">
      <div className="flex flex-wrap flex-col">{children}</div>
    </form>
  );
};

export default Form;

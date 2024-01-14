import React from "react";
import Input from "../Input/Input";

const Form = ({ children, onSubmit }) => {
  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="flex flex-wrap flex-col">{children}</div>
    </form>
  );
};

export default Form;

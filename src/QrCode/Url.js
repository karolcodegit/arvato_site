import React, { useState } from "react";
import SelectForm from "../components/SelectForm/SelectForm";
import Input from "../components/Input/Input";

const Url = ({
  codeType,
  showText,
  inputText,
  setCodeType,
  setShowText,
  setInputText,
}) => {
  const selectCode = [{ title: "QR" }, { title: "Code-128" }];
  const withText = [{ title: "Yes" }, { title: "No" }];

  const handleSelectChange = (e) => {
    setCodeType(e.target.value);
  };

  const handleTextShow = () => {
    setShowText(!showText);
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <SelectForm
        label="Select Code"
        value={codeType}
        onChange={handleSelectChange}
        options={selectCode}
      />
      <SelectForm
        label="With text?"
        value={showText}
        onChange={handleTextShow}
        options={withText}
      />
      <Input
        label="Text"
        type="text"
        placeholder="Text"
        value={inputText}
        onChange={handleTextChange}
      />
    </>
  );
};

export default Url;

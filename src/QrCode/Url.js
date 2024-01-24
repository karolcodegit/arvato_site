import React, { useState } from "react";
import SelectForm from "../components/SelectForm/SelectForm";
import TextInput from "../components/Common/TextInput/TextInput";
import Select from "../components/Common/Select/Select";

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
      <Select
        label="Select Code"
        value={codeType}
        onChange={handleSelectChange}
        options={selectCode}
      />
      <Select
        label="With text?"
        value={showText}
        onChange={handleTextShow}
        options={withText}
      />
      <TextInput
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

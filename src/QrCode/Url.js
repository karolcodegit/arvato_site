import React, { useState } from "react";
import Form from "../components/Form/Form";
import SelectForm from "../components/SelectForm/SelectForm";
import Input from "../components/Input/Input";

const Url = (
  selectedCode,
  setSelectedCode,
  selectedWithText,
  setSelectedWithText,
  text,
  setText
) => {
  const selectCode = [{ title: "QR" }, { title: "Code-128" }];
  const withText = [{ title: "Yes" }, { title: "No" }];

  return (
    <>
      <SelectForm
        label="Select Code"
        value={selectedCode}
        onChange={(e) => setSelectedCode(e.target.value)}
        options={selectCode}
      />
      <SelectForm
        label="With text?"
        value={selectedWithText}
        onChange={(e) => setSelectedWithText(e.target.value)}
        options={withText}
      />
      <Input
        label="Text"
        type="text"
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default Url;

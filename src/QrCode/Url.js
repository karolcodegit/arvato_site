import React from "react";
import Form from "../components/Form/Form";
import SelectForm from "../components/SelectForm/SelectForm";
import Input from "../components/Input/Input";

const Url = () => {
  const selectCode = [{ title: "QR" }, { title: "Code-128" }];
  const withText = [{ title: "Yes" }, { title: "No" }];
  return (
    <>
      <SelectForm
        label="Select Code"
        // value={zone}
        // onChange={(e) => setZone(e.target.value)}
        options={selectCode}
      />
      <SelectForm
        label="With text?"
        // value={zone}
        // onChange={(e) => setZone(e.target.value)}
        options={withText}
      />
      <Input label="Text" type="text" placeholder="Text" />
    </>
  );
};

export default Url;

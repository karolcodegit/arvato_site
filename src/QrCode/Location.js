import React, { useEffect, useState } from "react";
import SelectForm from "../components/SelectForm/SelectForm";
import zoneU from '../components/LayoutLabel/zoneU'
import zoneFH from '../components/LayoutLabel/zoneFH'
import TextInput from "../components/Common/TextInput/TextInput";
import Select from "../components/Common/Select/Select";

const Location = ({ zone, setZone, location1, setLocation1, location2, setLocation2, location3, setLocation3, setLayout }) => {
  
  const zoneZone = [
    { title: "F1" },
    { title: "F2" },
    { title: "F3" },
    { title: "F4" },
    { title: "F5" },
    { title: "F6" },
    { title: "F7" },
    { title: "H1" },
    { title: "H2" },
    { title: "U1" },
    { title: "U2" },
    { title: "U3" },
  ];

  const handleChangeInput1 = (e) => {
    const val = e.target.value;
    if(!isNaN(val)){
      setLocation1(e.target.value)}
  }
  const handleChangeInput2 = (e) => {
    const val = e.target.value;
    if(!isNaN(val)){
      setLocation2(e.target.value)}
  }
  const handleChangeInput3 = (e) => {
    const val = e.target.value;
    if(!isNaN(val)){
      setLocation3(e.target.value)}
  }

  return (
    <>
      <Select
        value={zone}
        onChange={(e) => setZone(e.target.value)}
        options={zoneZone}
      />
      <TextInput
        min="1"
        max="250"
        maxLength="3"
        placeholder="Lokalizacja 1"
        value={location1}
        onChange={(e) => handleChangeInput1(e)}
          
          
      />
      <TextInput
        min="1"
        max="250"
        maxLength="3"
        placeholder="Lokalizacja 2"
        value={location2}
        onChange={(e) => handleChangeInput2(e)}
      />
      <TextInput
        min="100"
        max="500"
        maxLength="3"
        placeholder="Lokalizacja 3"
        value={location3}
        onChange={(e) => handleChangeInput3(e)}
      />
    </>
  );
};

export default Location;

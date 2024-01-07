import React, { useEffect, useState } from "react";
import SelectForm from "../components/SelectForm/SelectForm";
import Input from "../components/Input/Input";
import zoneU from '../components/LayoutLabel/zoneU'
import zoneFH from '../components/LayoutLabel/zoneFH'

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

  return (
    <>
      <SelectForm
        value={zone}
        onChange={(e) => setZone(e.target.value)}
        options={zoneZone}
      />
      <Input
        min="1"
        max="250"
        placeholder="Lokalizacja 1"
        value={location1}
        onChange={(e) => setLocation1(e.target.value)}
      />
      <Input
        min="1"
        max="250"
        placeholder="Lokalizacja 2"
        value={location2}
        onChange={(e) => setLocation2(e.target.value)}
      />
      <Input
        min="100"
        max="500"
        placeholder="Lokalizacja 3"
        value={location3}
        onChange={(e) => setLocation3(e.target.value)}
      />
    </>
  );
};

export default Location;

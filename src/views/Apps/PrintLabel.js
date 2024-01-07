import React, { useState } from "react";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import zoneU from "../../components/LayoutLabel/zoneU";
import zoneFH from "../../components/LayoutLabel/zoneFH";
import Title from "../../components/Title/Title";
import Tabs from "../../components/Tabs/Tabs";
import Location from "../../QrCode/Location";
import Url from "../../QrCode/Url";
import Label from "../../QrCode/Label";

const PrintLabel = () => {
  const [zone, setZone] = useState("F1");
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [location3, setLocation3] = useState("");

  const [activeTab, setActiveTab] = useState("Location");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  let Layout;

  if (zone.startsWith("U")) {
    Layout = zoneU;
  } else if (zone.startsWith("F") || zone.startsWith("H")) {
    Layout = zoneFH;
  }

  const printLabelFn = () => {
    window.print();
  };
  return (
    <>
      <Box className="flex flex-col items-center md:flex-row">
        <IoQrCodeOutline className="text-3xl" />
        <h1 className="pl-2 font-bold">QR CODE GENERATOR</h1>
      </Box>
      <div className="flex gap-3 w-full grow">
        <Box className="flex flex-col w-3/5">
          <Tabs
            tabs={[
              {
                name: "Location",
                onClick: () => setActiveTab("Location"),
              },
              {
                name: "Url",
                onClick: () => setActiveTab("Url"),
              },
              {
                name: "Label",
                onClick: () => setActiveTab("Label"),
              },
            ]}
          />
          <div className="my-8 flex flex-col gap-3">
            {activeTab === "Location" && (
              <Location
                zone={zone}
                setZone={setZone}
                location1={location1}
                setLocation1={setLocation1}
                location2={location2}
                setLocation2={setLocation2}
                location3={location3}
                setLocation3={setLocation3}
              />
            )}
            {activeTab === "Url" && (
              <Url/>
            )}
            {activeTab === "Label" && (
              <Label />
            )}
          </div>
        </Box>
        <Box className="flex flex-col w-2/5 items-center justify-center p-4">
          <Title tag="h3">Preview</Title>
          <div className="w-full flex items-center justify-center">
            {Layout && (
              <Layout
                zone={zone}
                location1={location1}
                location2={location2}
                location3={location3}
              />
            )}
            <div className="block absolute w-8 h-8 left-[-23px] top-1/2 transform -translate-y-1/2 z-50">
              <div className="contents='' absolute w-9 h-9 bg-white z-50 rounded-full border-8 border-gray-200 flex items-center justify-center">
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <Button colorScheme="blue">Pobierz</Button>
            <Button colorScheme="green">Vector</Button>
          </div>
        </Box>
      </div>

      <div className="flex flex-col md:flex-row justify-between space-x-4 p-4">
        <Button bg="bg-red-500" textColor="text-white" width="w-full md:w-1/2">
          Clear
        </Button>
        <Button
          onClick={printLabelFn}
          bg="bg-green-500"
          textColor="text-white"
          width="w-full md:w-1/2"
        >
          Print
        </Button>
      </div>
    </>
  );
};

export default PrintLabel;

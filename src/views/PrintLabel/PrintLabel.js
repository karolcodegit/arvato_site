import React, { useState } from "react";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import zoneU from "../../components/LayoutLabel/zoneU";
import zoneFH from "../../components/LayoutLabel/zoneFH";
import Title from "../../components/Common/Title/Title";
import Tabs from "../../components/Tabs/Tabs";
import Location from "../../QrCode/Location";
import Url from "../../QrCode/Url";
import Label from "../../components/LayoutLabel/Label";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const PrintLabel = () => {
  const [zone, setZone] = useState("F1");
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [location3, setLocation3] = useState("");

  const [activeTab, setActiveTab] = useState("Location");

  const [selectedCode, setSelectedCode] = useState("");
  const [selectedWithText, setSelectedWithText] = useState("");
  const [text, setText] = useState("");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  let Layout;

  if(activeTab === 'Location'){
    if (zone.startsWith("U")) {
      Layout = zoneU;
    } else if (zone.startsWith("F") || zone.startsWith("H")) {
      Layout = zoneFH;
    }
  }else{
    Layout = Label;
  }
  

  const printLabelFn = () => {
    html2canvas(document.querySelector("#label")).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
  
      // Ustawienie rozmiaru strony na 10 cm x 3.5 cm
      const pdf = new jsPDF('p', 'mm', [10, 3.5]);
  
      pdf.addImage(imgData, 'PNG', 0, 0, 10, 3.5);
  
      // Utworzenie nowego okna i ustawienie jego zawartości na wygenerowany PDF
      const pdfWindow = window.open("");
      pdfWindow.document.write(
        "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
        btoa(pdf.output()) +
        "'></iframe>"
      );
    });
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
            ]}
          />
          <div className="my-8 flex flex-col">
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
              <Url 
              selectedCode={selectedCode}
              setSelectedCode={setSelectedCode}
              selectedWithText={selectedWithText}
              setSelectedWithText={setSelectedWithText}
              text={text}
              setText={setText}
              />
            )}

          </div>
        </Box>
        <Box className="flex flex-col w-2/5 items-center justify-between py-10">
          <Title tag="h2">Preview</Title>
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
            <Button onClick={printLabelFn} colorScheme="blue">Pobierz</Button>
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

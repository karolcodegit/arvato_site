import React, { useState } from 'react'
import AppearanceSettings from '../../components/Setting/AppearanceSettings';
import PrinterSettings from '../../components/Setting/PrinterSettings';
import CmrSettings from '../../components/Setting/CmrSettings';
import ConfigSettings from '../../components/Setting/ConfigSettings';
import Box from '../../components/Box/Box';
import Other from '../../components/Setting/Other';


const Setting = () => {
  const [activeSection, setActiveSection] = useState("appearance");
  const renderSection = () => {
    switch (activeSection) {
      case "printer":
        return <PrinterSettings />;
      case "cmr":
        return <CmrSettings />;
      case "config":
          return <ConfigSettings />;
      case "other":
        return <Other />;
    }
  };
  const sections = [
    {id: 'printer', name: 'Printer'},
    {id: 'cmr', name: 'Dane CMR'},
    {id: 'config', name: 'Config'},
    {id: 'other', name: 'Other'}
  ]
  return (
    <>
      
      <div className="flex">
        <Box col className="p-6 w-52 bg-white rounded-2xl ">
          <h1 className="text-2xl font-bold mb-4">Settings</h1>
          {sections.map((section) => (
              <button
              key={section.id}
              className={`w-full text-left py-2 px-4 rounded font-bold ${
                activeSection === section.id ? " text-gray-700" : "font-medium"
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.name}
            </button>
              
          ))}
        </Box>
        <Box className="flex-grow p-6 ml-4 bg-white rounded-2xl dark:text-white text-gray-700">
          {renderSection()}
        </Box>
      </div>
    </>
  );
};

export default Setting;
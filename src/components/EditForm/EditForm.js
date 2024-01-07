import React, { useContext, useState } from "react";
import Box from "../Box/Box";
import Form from "../Form/Form";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";
import { FaTruck } from "react-icons/fa6";
import { generatePdf } from "../generatorCmr/generatorCmr";
import { FaPager } from "react-icons/fa";
import { MdOutlineNumbers } from "react-icons/md";
import { PiPackage } from "react-icons/pi";
import { LiaPalletSolid } from "react-icons/lia";
import { GiWeight } from "react-icons/gi";
import { FaTrailer } from "react-icons/fa";
import { FaTruckFront } from "react-icons/fa6";
import { deleteRecord, getRecords, updateRecord } from "../../services/api";
import { TransportContext } from "../../TransportContext/TransportContext";





const EditForm = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const {setData, data,  setRefresh } = useContext(TransportContext);
  const handleChange = (e) => {
    setData(prevData =>({
      ...prevData, [e.target.name]: e.target.value,
    }))
  }

  const handlePrint = (data) => {
    setLoading(true);
    const doc = generatePdf(data);
    doc.output("dataurlnewwindow"); // Open PDF in a new window

    setLoading(false);
  };
  
  const handleSave = async(data) => {
    
      try {
        for(let key in data){
        if(data[key] === undefined || data[key] === null){
          console.log(`Field ${key} is ${data[key]}`);
        }
      }
      await updateRecord('app1pZi9VU5pPRXs9', 'Transport', data.id, data);
          refreshData();
      }catch(e){
        console.error('Failed to update record:', e)
      }
  }

  const refreshData = async () => {
    setLoading(true);
    try {
      const records = await getRecords('baseId', 'tableName');
      setData(records);
    } catch (error) {
      console.error('Failed to refresh data:', error);
    }
    setLoading(false);
  };

  const handleDelete = async (recordId) => {
    try{
      await deleteRecord('app1pZi9VU5pPRXs9', 'Transport', recordId);
      setRefresh(prev => !prev);
    }catch(e){
      console.log('Failed to delete record:', e);
    }
  }
  console.log(data)

  return (
    <Box>
      <div className="w-full flex items-center justify-center ">
        <div className="lg:flex items-center grow">
          <div className="w-full mt-8 mx-auto px-16 py-8 rounded-lg">
            <Title tag="h3">Edit transport</Title>
            <Form>
              <div className="px-3">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2  mb-6 md:mb-0">
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={FaTruck}
                        name="carrier"
                        label="Carrier"
                        value={data.carrier}
                        onChange={handleChange}
                      
                      />
                    </div>
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={FaTruck}
                        name="transportNumber"
                        label="Transport number"
                        value={data.transportNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={FaPager}
                        name="pager"
                        label="Pager"
                        value={data.pager}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={FaTruckFront}
                        name="tractorNumber"
                        label="License truck"
                        value={data.tractorNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={FaTrailer}
                        name="trailerNumber"
                        label="License trailer"
                        value={data.trailerNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <hr className="my-6" />
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2  mb-6 md:mb-0">
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={LiaPalletSolid}
                        name="pallets"
                        label="Number of pallets"
                        value={data.pallets}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={FaTruck}
                        name="seal"
                        label="Seal"
                        value={data.seal}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-4 mx-2">
                      {/* <Input
                        type="text"
                        icon={FaTruck}
                        name="departureDate"
                        label="Departure date"
                        value={data.departure}
                      /> */}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 ">
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={PiPackage}
                        name="package"
                        label="Number of packages"
                        value={data.package}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={GiWeight}
                        name="weight"
                        label="Weight"
                        value={data.weight}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full mx-2">
                    <Input
                      type="textarea"
                      tag="textarea"
                      name="message"
                      label="Message"
                      value={data.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-full">
              <Button
                  bg="bg-green-700"
                  onClick={() => handleSave(data)}
                  className="grow mx-3 mt-4"
                >
                  Save
                </Button>
                <Button
                  bg="bg-sky-700"
                  onClick={() => handlePrint(data)}
                  className="grow mx-3 mt-4"
                >
                  Print
                </Button>
                <Button
                  bg="bg-red-700"
                  onClick={() => handleDelete(data.id)}
                  className="grow mx-3 mt-4"
                >
                  Delate
                </Button>
                {/* {loading && <div>Loading...</div>} */}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default EditForm;

import React, { useContext, useEffect, useState } from "react";
import Box from "../Box/Box";
import Form from "../Form/Form";
import Title from "../Common/Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useNavigate, useParams } from "react-router-dom";

import { generatePdf } from "../generatorCmr/generatorCmr";
import { FaPager } from "react-icons/fa";
import { FaTrailer } from "react-icons/fa";
import { FaTruckFront } from "react-icons/fa6";
import { TransportContext } from "../../services/context/TransportContext/TransportContext";
import { deleteRecord, updateRecord } from "../../services/airtable/api";
import Modal from "../Common/Modal/Modal";
import { CalendarIcon, PackageIcon, PagerIcon, PalletIcon, TrailerIcon, TruckFrontIcon, TruckIcon, WeightIcon } from "../Common/Icons/Icons";


const EditForm = () => {
  const { id } = useParams();
  const { editData, fetchData, isDataLoaded } = useContext(TransportContext);
  const [formData, setFormData] = useState(editData);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handlePrint = () => {
    const doc = generatePdf();
    doc.output("dataurlnewwindow"); // Open PDF in a new window
  };

  const handleDelete = async (id) => {
    try {
      await deleteRecord("app1pZi9VU5pPRXs9", "Transport", id);
      navigate("/listTransport");
      fetchData();
    } catch (e) {
      console.log("Failed to delete record:", e.message);
    }
  };

  useEffect(() => {
    fetchData().then(() => {
      setLoading(false);
    });
  }, []);
  
  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  console.log(isDataLoaded);

  if (!isDataLoaded) {
    return <div>Loading...</div>;
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  

  const handleSave = async () => {
    try{
      await updateRecord('app1pZi9VU5pPRXs9', 'Transport', id, formData);
      fetchData();
    }catch(e){
      console.log('Failed to update record:', e.message);
    }
  }

  return (
    <Box>
      <div className="w-full flex items-center justify-center ">
        <div className="lg:flex items-center grow">
          <div className="w-full mt-8 mx-auto px-16 py-8 rounded-lg">
            <Title tag="h3">Edit transport</Title>
            <Form onSubmit={(e) => {e.preventDefault(); handleSave()}}>
              <div className="px-3">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2  mb-6 md:mb-0">
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={TruckIcon}
                        name="Carrier"
                        label="Carrier"
                        value={formData?.Carrier}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={TruckIcon}
                        name="Carrier_Number"
                        label="Transport number"
                        value={formData?.Carrier_Number}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={PagerIcon}
                        name="Pager"
                        label="Pager"
                        value={formData?.Pager}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={TruckFrontIcon}
                        name="License_Truck"
                        label="License truck"
                        value={formData?.License_Truck}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={TrailerIcon}
                        name="License_Trailer"
                        label="License trailer"
                        value={formData?.License_Trailer}
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
                        icon={PalletIcon}
                        name="Pallets"
                        label="Number of pallets"
                        value={editData?.Pallets}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={TruckIcon}
                        name="Seal"
                        label="Seal"
                        value={editData?.Seal}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={CalendarIcon}
                        name="departureDate"
                        label="Departure date"
                        value={editData?.departure}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 ">
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={PackageIcon}
                        name="Package"
                        label="Number of packages"
                        value={editData?.Package}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-4 mx-2">
                      <Input
                        type="text"
                        icon={WeightIcon}
                        name="Weight"
                        label="Weight"
                        value={editData?.Weight}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full mx-2">
                    <Input
                      type="textarea"
                      tag="textarea"
                      name="Message"
                      label="Message"
                      value={editData?.Message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-full">
                <Button
                  bg="bg-green-700"
                  type='submit'
                  className="grow mx-3 mt-4"
                >
                  Save
                </Button>
                <Button
                  bg="bg-sky-700"
                  onClick={() => handlePrint()}
                  className="grow mx-3 mt-4"
                >
                  Print
                </Button>
                <Button
                  bg="bg-red-700"
                  onClick={() => setShowModal(true)}
                  className="grow mx-3 mt-4"
                >
                  Delete
                </Button>

                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                  <Form>
                    <Title tag="h4">
                      Are you sure you want to delete this transport?
                    </Title>
                    <div className="w-full flex space-x-2">
                      <Button
                        bg="bg-red-700"
                        className="mt-8 flex-grow"
                        onClick={() => handleDelete(id)}

                      >
                        Yes
                      </Button>
                      <Button
                        className="mt-8 flex-grow"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </Form>
                </Modal>

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

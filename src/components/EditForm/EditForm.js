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
import {
  CalendarIcon,
  PackageIcon,
  PagerIcon,
  PalletIcon,
  TrailerIcon,
  TruckFrontIcon,
  TruckIcon,
  WeightIcon,
} from "../Common/Icons/Icons";
import db from "../../services/firebase/firebaseConfig";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import Notification from "../Common/Notification/Notification";


const EditForm = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });

  const [rowData, setRowData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const docRef = await getDoc(doc(db, "transport", id));
      if (docRef.exists()) {
        setRowData(docRef.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchData();
  }, [id]);

  const handlePrint = () => {
    const doc = generatePdf(rowData);
    doc.output("dataurlnewwindow"); // Open PDF in a new window
  };

  const handleChange = (e) => {
    setRowData({
      ...rowData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const docRef = doc(db, "transport", id);
      await updateDoc(docRef, {
        Carrier: rowData.Carrier,
        Carrier_Number: rowData.Carrier_Number,
        License_Truck: rowData.License_Truck,
        License_Trailer: rowData.License_Trailer,
        Pager: rowData.Pager,
        Pallets: rowData.Pallets,
        Seal: rowData.Seal,
        Departure: rowData.Departure,
        Package: rowData.Package,
        Weight: rowData.Weight,
        Message: rowData.Message,
      });
      setNotification({ message: "Edited transport", type: "success" });
    } catch (e) {
      setNotification({ message: `Error ${e.message}`, type: "error" });
    }
  };

  const handleDelete = async (id) => {
    const docRef = doc(db, "transport", id);
    await deleteDoc(docRef);
    navigation(`/listTransport`);
  };

  return (
    <>
      {notification.message && (
        <Notification message={notification.message} type={notification.type} />
      )}
      <Box>
        <div className="w-full flex items-center justify-center ">
          <div className="lg:flex items-center grow">
            <div className="w-full mt-8 mx-auto px-16 py-8 rounded-lg">
              <Title tag="h3">Edit transport</Title>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}
              >
                <div className="px-3">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2  mb-6 md:mb-0">
                      <div className="my-4 mx-2">
                        <Input
                          type="text"
                          icon={TruckIcon}
                          name="Carrier"
                          label="Carrier"
                          value={rowData?.Carrier}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-4 mx-2">
                        <Input
                          type="text"
                          icon={TruckIcon}
                          name="Carrier_Number"
                          label="Transport number"
                          value={rowData?.Carrier_Number}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-4 mx-2">
                        <Input
                          type="text"
                          icon={PagerIcon}
                          name="Pager"
                          label="Pager"
                          value={rowData?.Pager}
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
                          value={rowData?.License_Truck}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-4 mx-2">
                        <Input
                          type="text"
                          icon={TrailerIcon}
                          name="License_Trailer"
                          label="License trailer"
                          value={rowData?.License_Trailer}
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
                          value={rowData?.Pallets}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-4 mx-2">
                        <Input
                          type="text"
                          icon={TruckIcon}
                          name="Seal"
                          label="Seal"
                          value={rowData?.Seal}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-4 mx-2">
                        <Input
                          type="text"
                          icon={CalendarIcon}
                          name="Departure"
                          label="Departure date"
                          value={rowData?.Departure}
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
                          value={rowData?.Package}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-4 mx-2">
                        <Input
                          type="text"
                          icon={WeightIcon}
                          name="Weight"
                          label="Weight"
                          value={rowData?.Weight}
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
                        value={rowData?.Message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex w-full">
                  <Button
                    
                    type="submit"
                    className="grow mx-3 mt-4"
                    onClick={handleSave}
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
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default EditForm;

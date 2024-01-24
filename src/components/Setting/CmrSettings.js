import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button";
import Modal from "../Common/Modal/Modal";
import Title from "../Common/Title/Title";
import Form from "../Form/Form";
import { FaTruck } from "react-icons/fa6";
import Notification from "../Common/Notification/Notification";
import Details from "../Common/SetingsDetailsTable/SetingsDetailsTable";
import { addData, getData, updateData } from "../../services/firebase/database";
import TextInput from "../Common/TextInput/TextInput";
import { Link } from "react-router-dom";

const CmrSettings = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [company, setCompany] = useState([]);
  const [carriers, setCarriers] = useState([]);
  const [editingCarrier, setEditingCarrier] = useState(null);
  const [formData, setFormData] = useState({
    Name_Carrier: "",
    Street: "",
    Building_Number: "",
    City: "",
    Country: "",
  });
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [activeTab, setActiveTab] = useState("Company");

  const handleAddCarrier = () => {
    setShowModal(true);
  };

  const handleSave = async () => {
    if (formData) {
      try {
        const carrierData = {
          Name_Carrier: formData.Name_Carrier,
          Street: formData.Street,
          Building_Number: formData.Building_Number,
          City: formData.City,
          Country: formData.Country,
        };
        if (editingCarrier) {
          // Update the existing carrier
          await updateData("Carriers", editingCarrier.id, carrierData);
          setCarriers(
            carriers.map((carrier) =>
              carrier.id === editingCarrier.id ? carrierData : carrier
            )
          );
        } else {
          // Add a new carrier
          const docId = await addData("Carriers", carrierData);
          setCarriers((prevCarriers) => [...prevCarriers, carrierData]);
        }
        handleCloseModal();
        setFormData({
          Name_Carrier: "",
          Street: "",
          Building_Number: "",
          City: "",
          Country: "",
        })
       
      } catch (e) {
        console.error(e);
      }
    }
  };

  //getData
  useEffect(() => {
    const fetchData = async () => {
      try {
        const records = await getData("BusinessEntities");
        setCompany(records);

        const carrierRecords = await getData("Carriers");
        setCarriers(carrierRecords);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingCarrier(null);
    setFormData({
      Name_Carrier: "",
      Street: "",
      Building_Number: "",
      City: "",
      Country: "",
    })
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditCarrier = (carrier) => {
    setFormData(carrier);
    setEditingCarrier(carrier);
    setShowModal(true);
  };
  return (
    <div className="w-full">
      <div className="flex flex-col px-3 py-4">
        <div className="flex items-center">
          <span>Settings</span>{" "}
          <span className="px-2">
            <IoIosArrowForward />
          </span>
          <span>CMR</span>
        </div>

        <div className="py-6">
          <div className="block">
            <div className="border-b border-gray-300">
              <nav className="flex" aria-label="Tabs">
                <Link
                  onClick={() => setActiveTab("Company")}
                  className={`font-medium text-sm py-4 px-1 ${
                    activeTab === "Company"
                      ? "text-gray-700 border-b-2 border-blue-500"
                      : "text-gray-400"
                  }`}
                >
                  Company
                </Link>
                <Link
                  onClick={() => setActiveTab("Carriers")}
                  className={`font-medium text-sm py-4 px-1 ${
                    activeTab === "Carriers"
                      ? "text-gray-700 border-b-2 border-blue-500"
                      : "text-gray-400"
                  }`}
                >
                  Carriers
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {activeTab === "Company" && (
          <div>
            <div className="py-2 border-b border-gray-300 mt-7">
              <span className="font-bold">Default settings</span>
            </div>

            {company[0] && (
              <dl className="divide-y divide-gray-100">
                {company[0].Company_Name && (
                  <Details
                    title="Name company"
                    value={company[0].Company_Name}
                  />
                )}
                {company[0].Second_Name && (
                  <Details
                    title="Second name company"
                    value={company[0].Second_Name}
                  />
                )}
                {company[0].Street && (
                  <Details title="Street" value={company[0].Street} />
                )}
                {company[0].Building_Number && (
                  <Details title="Number" value={company[0].Building_Number} />
                )}
                {company[0].Zipcode && (
                  <Details title="Zipcode" value={company[0].Zipcode} />
                )}
                {company[0].City && (
                  <Details title="City" value={company[0].City} />
                )}
                {company[0].Country && (
                  <Details title="Country" value={company[0].Country} />
                )}
              </dl>
            )}
          </div>
        )}

        {activeTab === "Carriers" && (
          <div>
            <div className="py-2 border-b border-gray-300 mt-7 flex justify-between items-center">
              <span className="font-bold">Carriers</span>
              <Button onClick={handleAddCarrier} bg="bg-gray-700">
                Add Carrier
              </Button>
            </div>

            {carriers ? (
              <ul className="">
                {carriers.map((carrier, index) => (
                  <li
                    key={index}
                    className="px-4 py-6  flex sm:flex-row justify-between items-start sm:items-center border-b"
                  >
                    <span className="text-sm font-medium leading-6 text-gray-900 mb-2 sm:mb-0">{carrier?.Name_Carrier}</span>
                    <button
                      onClick={() => handleEditCarrier(carrier)}
                      className=""
                    >
                      edit
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        )}

        
          <form>
            <div className="flex justify-between">
              <Modal isOpen={showModal} onClose={handleCloseModal}>
                <Form>
                  <Title tag="h3">Additing new carrier</Title>

                  <TextInput
                    name="Name_Carrier"
                    icon={FaTruck}
                    label="Name carrier"
                    value={formData?.Name_Carrier}
                    onChange={handleInputChange}
                  />
                  <TextInput
                    name="Street"
                    icon={FaTruck}
                    label="Street"
                    value={formData?.Street}
                    onChange={handleInputChange}
                  />
                  <TextInput
                    name="Building_Number"
                    icon={FaTruck}
                    label="Number"
                    value={formData?.Building_Number}
                    onChange={handleInputChange}
                  />
                  <TextInput
                    name="City"
                    icon={FaTruck}
                    label="City"
                    value={formData?.City}
                    onChange={handleInputChange}
                  />
                  <TextInput
                    name="Country"
                    icon={FaTruck}
                    label="Country"
                    value={formData?.Country}
                    onChange={handleInputChange}
                  />
                  <Button on className="mt-8" onClick={handleSave}>
                    Save
                  </Button>
                </Form>
              </Modal>
            </div>
          </form>
        
      </div>
      <Notification message={notification.message} type={notification.type} />
    </div>
  );
};

export default CmrSettings;

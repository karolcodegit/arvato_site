import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button";
import { createRecord, getRecords, updateRecord } from "../../services/api";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import Title from "../Title/Title";
import Form from "../Form/Form";
import { FaTruck } from "react-icons/fa6";
import Notification from "../Notification/Notification";
import { RiEdit2Fill } from "react-icons/ri";


const CmrSettings = () => {
  const [showModal, setShowModal] = useState(false);
  const [company, setCompany] = useState(null);
  const [carriers, setCarriers] = useState(null);

  const [formData, setFormData] = useState(null);
  const [editingCarrier, setEditingCarrier] = useState(null);

  const [notification, setNotification] = useState({message: '', type: ''});

  const handleAddCarrier = () => {
    setFormData({
      Name_Carrier: "",
      Street: "",
      Number: "",
      City: "",
      Country: "",
    })
    setEditingCarrier(null);
    setShowModal(true);
  }

  const handleEditCarrier = (carrier) => {
    setFormData({
      Name_Carrier: carrier.Name_Carrier,
      Street: carrier.Street,
      Number: carrier.Number,
      City: carrier.City,
      Country: carrier.Country,
    })
    setEditingCarrier(carrier);
    setShowModal(true);
  }

  const handleSave = async () => {
    try{
    if (editingCarrier) {
      const updatedCarrier = await updateRecord('app1pZi9VU5pPRXs9', 'Carriers', editingCarrier.id, formData);
      setCarriers(prevCarriers => prevCarriers.map(carrier => carrier.id === updatedCarrier.id ? updatedCarrier : carrier));
      setNotification({message: 'Editing success!', type: 'success'});
    } else {
      const newCarrier = await createRecord('app1pZi9VU5pPRXs9', 'Carriers', formData);
      setCarriers(prevCarriers => [...prevCarriers, newCarrier]);
      setNotification({message: 'New carrier successfully added', type: 'success'});
    }
    
    }catch(e){
      setNotification({message: 'operation failed!', type: 'error'});
    }
    setShowModal(false);
  };

  
  useEffect(() => {
    const fetchCompany = async () => {
      const record = await getRecords("app1pZi9VU5pPRXs9", "Company");
      setCompany(record[0]);

      const carrier = await getRecords("app1pZi9VU5pPRXs9", "Carriers");
      setCarriers(carrier);
    };

    fetchCompany();
  }, []);

  if (!company) {
    return <div>Loading...</div>;
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        <div className="py-2 border-b border-gray-300 mt-7">General</div>
        <div className="py-2 border-b border-gray-300 mt-7">
          <span className="font-bold">Default settings</span>
        </div>
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Name company
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {company["Name_Company"]}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Second name company
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {company["Second_Name_Company"]}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Street
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {company["Street"]}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Number
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {company["Number"]}
            </dd>
          </div>
          <div
            className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Zipcode
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {company["Zipcode"]}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              City
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {company["City"]}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Country
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {company["Country"]}
            </dd>
          </div>
        </dl>
        <div className="flex justify-between py-8 border-b border-gray-300">
          <span>Branding</span>
          <div>
            <span>Change logo</span>
          </div>
        </div>
        <div className="py-2 border-b border-gray-300 mt-7">
          <span className="font-bold">Carriers</span>
        </div>
        <div className="py-2 border-b border-gray-300">
          <form>
            <div className="flex justify-between">
              <label>
                Carrier Name:
                <input type="text" name="name" />
              </label>
              <Button onClick={handleAddCarrier} bg="bg-gray-700">
                Add Carrier
              </Button>
              <Modal isOpen={showModal} onClose={handleCloseModal}>
                <Form>
                  <Title tag="h4">Additing new carrier</Title>
                 
                  <Input
                    type="text"
                    name="Name_Carrier"
                    icon={FaTruck}
                    label="Name carrier"
                    value={formData?.Name_Carrier}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    name="Street"
                    icon={FaTruck}
                    label="Street"
                    value={formData?.Street}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    name="Number"
                    icon={FaTruck}
                    label="Number"
                    value={formData?.Number}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    name="City"
                    icon={FaTruck}
                    label="City"
                    value={formData?.City}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    name="Country"
                    icon={FaTruck}
                    label="Country"
                    value={formData?.Country}
                    onChange={handleInputChange}
                  />
                  <Button className="mt-8" onClick={handleSave}>
                    Save
                  </Button>
                </Form>
              </Modal>
              
            </div>
          </form>
        </div>
        <div className="py-2 border-b border-gray-300">
          <ul>
            {carriers ? (
              carriers.map((carrier, index) => (
                <li key={index} className="flex justify-between py-2">
                  <span>{carrier.Name_Carrier}</span>
                  <Button onClick={() => handleEditCarrier(carrier)}><RiEdit2Fill /></Button>
                </li>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </ul>
        </div>


        
      </div>
      <Notification message={notification.message} type={notification.type} />
    </div>
  );
};

export default CmrSettings;

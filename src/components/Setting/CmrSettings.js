import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button";
import Modal from "../Common/Modal/Modal";
import Input from "../Input/Input";
import Title from "../Common/Title/Title";
import Form from "../Form/Form";
import { FaTruck } from "react-icons/fa6";
import Notification from "../Common/Notification/Notification";
import { RiEdit2Fill } from "react-icons/ri";
import Details from "../Common/SetingsDetailsTable/SetingsDetailsTable";
import { addData, getData } from "../../services/firebase/database";



// const CmrSettings = () => {
//   const [data, setData] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [company, setCompany] = useState(null);
//   const [carriers, setCarriers] = useState(null);
//   const [formData, setFormData] = useState(null);
//   const [notification, setNotification] = useState({ message: "", type: "" });
  
//     const handleAddCarrier = (carrier) => {
//       setShowModal(true);
//     };

//     const handleSave = async () => {
//     try{
//       const carrierData = {
//         Name_Carrier: formData.Name_Carrier,
//         Street: formData.Street,
//         Number: formData.Number,
//         City: formData.City,
//         Country: formData.Country,
//         };
//         const docId = await addData("Carriers", carrierData);
//         const records = await getData("Carriers");
//         setDatas(records);
//         handleCloseModal();
//         setCarriers(prevCarriers => [...prevCarriers, carrierData]);
//         setFormData(null);
       
//       }catch(e){
//         console.error(e)
//       }
//     }
  


//   return (
//     <div>CmrSettings</div>
//   )
// }

// export default CmrSettings

const CmrSettings = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [company, setCompany] = useState(null);
  const [carriers, setCarriers] = useState(null);
  const [formData, setFormData] = useState({
    Name_Carrier: '',
    Street: '',
    Building_Number: '',
    City: '',
    Country: '',
  });
  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleAddCarrier = () => {
    setShowModal(true);
  };

  const handleSave = async () => {
    if (formData) {
      try{
        const carrierData = {
          Name_Carrier: formData.Name_Carrier,
          Street: formData.Street,
          Number: formData.Building_Number,
          City: formData.City,
          Country: formData.Country,
          };
          const docId = await addData("Carriers", carrierData);
          const recordsCarriers = await getData("Carriers");
          setData(recordsCarriers);
          handleCloseModal();
          setCarriers(prevCarriers => [...prevCarriers, carrierData]);
        
        }catch(e){
          console.error(e)
        }
      }
    }
  

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
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  // const handleEditCarrier = (carrier) => {
  //   setFormData(carrier);
  //   setShowModal(true);
  // }
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
          <Details title="Name company" value={company[0]?.Company_Name} />
          <Details
            title="Second name company"
            value={company[0]?.Second_Name}
          />
          <Details title="Street" value={company[0]?.Street} />
          <Details title="Number" value={company[0]?.Building_Number} />
          <Details title="Zipcode" value={company[0]?.Zipcode} />
          <Details title="City" value={company[0]?.City} />
          <Details title="Country" value={company[0]?.Country} />
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
                    name="Building_Number"
                    icon={FaTruck}
                    label="Number"
                    value={formData?.Building_Number}
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

        <ul className="divide-y divide-gray-100">
          {carriers ? (
            carriers?.map((carrier, index) => (
              <li
                key={index}
                className="px-4 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center"
              >
                <span className="text-sm font-medium leading-6 text-gray-900 mb-2 sm:mb-0">
                  {carrier?.Name_Carrier}
                </span>
                <Button
                  // onClick={() => handleEditCarrier(carrier)}
                  className="text-sm leading-6 text-gray-700"
                >
                  edit
                </Button>
              </li>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </ul>
      </div>
      <Notification message={notification.message} type={notification.type} />
    </div>
  );
};

export default CmrSettings;

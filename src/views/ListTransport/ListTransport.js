import React, { useContext, useEffect, useMemo, useState } from "react";
// import UniversalTable from "../../components/UniversalTable/UniversalTable";
import Button, { EditButton } from "../../components/Button/Button";
import Title from "../../components/Common/Title/Title";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import { FaTruck } from "react-icons/fa6";
import Modal from "../../components/Common/Modal/Modal";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table";
import Box from "../../components/Box/Box";
// import { list_carriers } from "../../data/ListCarriers";
import { addData, getData } from "../../services/firebase/database";
import Notification from "../../components/Common/Notification/Notification";
import { PlusIcon } from "../../components/Common/Icons/Icons";

const ListTransport = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "Date",
      },
      {
        Header: "Carrier",
        accessor: "Carrier",
      },
      {
        Header: "Carrier Number",
        accessor: "Carrier_Number",
      },
      {
        Header: "License Truck",
        accessor: "License_Truck",
      },
      {
        Header: "License Trailer",
        accessor: "License_Trailer",
      },
      {
        Header: "Status",
        accessor: "Status",
      },
      {
        Header: "Pager",
        accessor: "Pager",
      },
    ],
    []
  );

  const [data, setData] = useState([]);
  const [newRow, setNewRow] = useState({
    Carrier: 'DHL',
    Date: new Date().toLocaleDateString('en-GB'),
    Status: 'waiting',
    Pallets: '',
    Seal: '',
    Departure: '',
    Package: '',
    Weight: '',
    Message: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const records = await getData("transport");
        setData(records);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //Aktualizuj stan newRow na podstawie wprowadzanych danych
  const handleInputChange = (e) => {
    setNewRow({
      ...newRow,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveRecord = async () => {
    try {
      const docId = await addData("transport", newRow);
      console.log(`New document added with ID: ${docId}`);
      const records = await getData("transport"); // ponownie pobierz dane
      setData(records); // update record
      closeModal();
      setNotification({ message: 'Created new transport', type: 'success' });
    } catch (e) {
      setNotification({ message: `Error: ${e.message}`, type: 'error' });
    }
  };

  const onAddButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleEdit = (id) => {
    navigate(`/listTransport/${id}`)
  }

  return (
    <>
    {notification && <Notification message={notification.message} type={notification.type} />}
      <Box col>
        <div className="p-6 pb-0 mb-5 border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex justify-between items-center">
          <Title tag="h5">List transport</Title>
         
          <Button onClick={onAddButtonClick}> <PlusIcon className='mr-4 w-4 h-4 font-bold' />Add truck</Button>
        </div>
      </Box>
      <Table columns={columns} data={data} showActions={true} onEdit={handleEdit}/>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form>
          <Title tag="h4">Additing new track</Title>
          <Input
            type="select"
            name="Carrier"
            icon={FaTruck}
            label="Carrier"
            // options={list_carriers.map((carrier) => carrier.carrier)}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="Carrier_Number"
            icon={FaTruck}
            label="Carrier Number"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="License_Truck"
            icon={FaTruck}
            label="License Truck"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="License_Trailer"
            icon={FaTruck}
            label="License Trailer"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="Pager"
            icon={FaTruck}
            label="Number of pager"
            onChange={handleInputChange}
          />
          <Button className="mt-8" onClick={handleSaveRecord}>
            Save
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default ListTransport;

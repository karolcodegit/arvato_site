import React, { useEffect, useMemo, useState } from "react";
import Button from "../../components/Button/Button";
import Title from "../../components/Common/Title/Title";
import Form from "../../components/Form/Form";
import { FaTruck } from "react-icons/fa6";
import Modal from "../../components/Common/Modal/Modal";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Common/Table/Table";
import Box from "../../components/Box/Box";
import { list_carriers } from "../../components/Data/ListCarriers";
import { addData, getData } from "../../services/firebase/database";
import Notification from "../../components/Common/Notification/Notification";
import { PlusIcon } from "../../components/Common/Icons/Icons";
import StatusCell from "../../components/Common/StatusCell/StatusCell";
import { Controller, useForm } from "react-hook-form";
import TextInput from "../../components/Common/TextInput/TextInput";

const ListTransportInbound = () => {
  const { register, handleSubmit, errors, control } = useForm();

  const onSubmit = (data) => console.log(data);

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "Date",
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
        Cell: ({ cell: { value } }) => <StatusCell status={value} />,
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <button onClick={() => handleEdit(row.original.id)}>Edit</button>
        ),
      },
    ],
    []
  );

  const [data, setData] = useState([]);

  const [newRow, setNewRow] = useState({
    Carrier: "DHL",
    Date: new Date().toLocaleDateString("en-GB"),
    Status: "Waiting",
    Pallets: "",
    Departure: "",
    Message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const records = await getData("TransportInbound");
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
      const docId = await addData("TransportInbound", newRow);
      console.log(`New document added with ID: ${docId}`);
      const records = await getData("TransportInbound"); // ponownie pobierz dane
      setData(records); // update record
      closeModal();
      setNotification({ message: "Created new transport", type: "success" });
    } catch (e) {
      setNotification({ message: `Error: ${e.message}`, type: "error" });
    }
  };

  const onAddButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleEdit = (id) => {
    navigate(`/listTransportInbound/${id}`);
  };

  return (
    <>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
      <Box col>
        <div className="p-6 pb-0 mb-5 border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex justify-between items-center">
          <Title tag="h3">List transport</Title>

          <Button onClick={onAddButtonClick}>
            {" "}
            <PlusIcon className="mr-4 w-4 h-4 font-bold" />
            Add truck
          </Button>
        </div>
      </Box>
      <Table
        columns={columns}
        data={data}
        showActions={true}
        onEdit={handleEdit}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title tag="h3">Additing new track</Title>

          <TextInput
            name="Carrier_Number"
            icon={FaTruck}
            label="Carrier Number"
          />

          <TextInput
            name="License_Truck"
            icon={FaTruck}
            label="License Truck"
          />
          <TextInput
            name="License_Trailer"
            icon={FaTruck}
            label="License Trailer"
            onChange={handleInputChange}
          />
          <TextInput
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

export default ListTransportInbound;

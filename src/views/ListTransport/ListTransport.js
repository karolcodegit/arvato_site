import React, { useContext, useEffect, useMemo, useState } from "react";
import UniversalTable from "../../components/UniversalTable/UniversalTable";
import Button, {
  EditButton,
} from "../../components/Button/Button";
import Title from "../../components/Common/Title/Title";
import { TransportContext } from "../../services/context/TransportContext/TransportContext";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import { FaTruck } from "react-icons/fa6";
import { createRecord, getRecords } from "../../services/airtable/api";
import Modal from "../../components/Common/Modal/Modal";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table";
import Box from "../../components/Box/Box";
// import { list_carriers } from "../../data/ListCarriers";

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
    ], []
  );


  const { data, fetchData, setEditData } =
    useContext(TransportContext);
  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };


  const selectedData = data.map((item) => ({
    id: item.id,
    Date: item.Date,
    Carrier: item.Carrier,
    Carrier_Number: item.Carrier_Number,
    License_Truck: item.License_Truck,
    License_Trailer: item.License_Trailer,
    Status: item.Status,
    Pager: item.Pager,
  }));


  const [newRow, setNewRow] = useState({
    Carrier: "DHL",
    Carrier_Number: "",
    License_Truck: "",
    License_Trailer: "",
    Status: 'Waiting',
    Pager: "",
  });

  // Aktualizuj stan newRow na podstawie wprowadzanych danych
  const handleInputChange = (e) => {
    setNewRow({
      ...newRow,
      [e.target.name]: e.target.value,
    });
  };


  const actions = [
    {
      label: <EditButton />,
      onClick: (id) => {
        const rowData = data.find((item) => item.id === id);
        setEditData(rowData);
        navigate(`/listTransport/${id}`);
      },
    },
  ];
  const handleSave = async () => {
    try {
      const response = await createRecord('app1pZi9VU5pPRXs9', 'Transport', newRow);
      closeModal();
      fetchData();
    } catch (error) {
      console.error(error);
    }
    setNewRow({
      Carrier: "",
      Carrier_Number: "",
      License_Truck: "",
      License_Trailer: "",
      Status: 'Waiting',
      Pager: "",
    });
  };


  const onAddButtonClick = () => {
    setIsModalOpen(true);
  }
  return (
    <>
    {/* <UniversalTable
      headers={headers}
      data={selectedData}
      actions={actions}
      nameTable="List of trucks"
      withAddButton
      onAddButtonClick={openModal} // openModal
    /> */}
    <Box col>
        <div className="p-6 pb-0 mb-5 border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex justify-between items-center">
          <Title tag="h5">List transport</Title>
          <Button onClick={onAddButtonClick}>Add truck</Button>
        </div>
    </Box>
    <Table columns={columns} data={data} />

    <Modal isOpen={isModalOpen} onClose={closeModal}>
       <Form>
          <Title tag="h4">Additing new track</Title>
          {/* <Input
            type="select"
            name="Carrier"
            icon={FaTruck}
            label="Carrier"
            options={list_carriers.map((carrier) => carrier.carrier)}
            onChange={handleInputChange}
          /> */}
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
          <Button className="mt-8" onClick={handleSave}>
            Save
          </Button>
        </Form>
      </Modal>
      </>
  );
};

export default ListTransport;

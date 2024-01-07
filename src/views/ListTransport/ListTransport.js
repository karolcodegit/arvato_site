import React, { useContext, useEffect, useState } from "react";
import TablesBig from "../../components/TablesBig/TablesBig";
import Modal from "../../components/Modal/Modal";
import CarrierIcon from "../../components/CarrierIcon/CarrierIcon";
import Form from "../../components/Form/Form";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import { FaTruck } from "react-icons/fa6";
import Button from "../../components/Button/Button";
import { createRecord } from "../../services/api.js";
import { listCarriers } from "../../data/listCarriers";
import { TransportContext } from "../../TransportContext/TransportContext";

const ListTransport = () => {
  //setState
  const [showModal, setShowModal] = useState(false);
  const {data, setData, isLoading, setRefresh} = useContext(TransportContext);
 
  const [newData, setNewData] = useState({
    Status: "",
    Carrier: "DHL",
    ["Carrier number"]: "",
    ["License truck"]: "",
    ["License trailer"]: "",
    Pager: "",
  });
  //column names
  const columns = [
    { label: "Date" },
    { label: "Carrier" },
    { label: "Carrier number" },
    { label: "License truck" },
    { label: "License trailer" },
    // { label: "Hour" },
    { label: "Status" },
    { label: "Pager" },
  ];
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSave = () => {
    const currentDate = new Date();

    const updatedData = {
      ...newData,
      Status: "Waiting",
    };

    setNewData(updatedData);

    createRecord("app1pZi9VU5pPRXs9", "Transport", updatedData).then(
      (record) => {
        // const newData = [...data, record];
        setData(prevData => [...prevData, record]);
        setShowModal(false);
        setRefresh(prev => !prev); //refresh data
      }
    );
  };

  return (
    <>
      <TablesBig
        nameTable="List of truck"
        isLoading={isLoading}
        columns={columns}
        data={data}
        addTranck={() => setShowModal(true)}
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Form>
          <Title tag="h4">Additing new track</Title>
          <Input
            type="select"
            name="carrier"
            icon={FaTruck}
            label="Carrier"
            options={listCarriers.map((carrier) => carrier.carrier)}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="transportNumber"
            icon={FaTruck}
            label="Carrier Number"
            onChange={handleInputChange}
          /> 
           <Input
            type="text"
            name="tractorNumber"
            icon={FaTruck}
            label="License Truck"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="trailerNumber"
            icon={FaTruck}
            label="License Trailer"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="pager"
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

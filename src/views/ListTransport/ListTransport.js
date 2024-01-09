import React, { useContext, useEffect, useState } from "react";
import TablesBig from "../../components/TablesBig/TablesBig";
import Modal from "../../components/Modal/Modal";
import Form from "../../components/Form/Form";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import { FaTruck } from "react-icons/fa6";
import Button from "../../components/Button/Button";
import { createRecord, getRecords } from "../../services/api.js";
import { listCarriers } from "../../data/listCarriers";
import { TransportContext } from "../../TransportContext/TransportContext";

const ListTransport = () => {
  //setState
  const [showModal, setShowModal] = useState(false);
  const { setData, data } = useContext(TransportContext);
  const [formValues, setFormValues] = useState({});

  console.log(setData);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const records = await getRecords("app1pZi9VU5pPRXs9", "Transport");
      setData(records);
    };
    fetchData();
  }, []);

  const columns = [
    { label: "Date" },
    { label: "Carrier" },
    { label: "Carrier Number" },
    { label: "Licens Truck" },
    { label: "License Trailer" },
    // { label: "Hour" },
    { label: "Status" },
    { label: "Pager" },
  ];

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    const recordToSave = {
      ...formValues,
      Status: "Waiting",
    };

    await createRecord("app1pZi9VU5pPRXs9", "Transport", recordToSave);
    // Po zapisaniu danych, zamknij modal i odśwież dane
    setShowModal(false);
    const records = await getRecords("app1pZi9VU5pPRXs9", "Transport");
    setData(records);
  };

  return (
    <>
      <TablesBig
        nameTable="List of truck"
        // isLoading={isLoading}
        columns={columns}
        addTranck={() => setShowModal(true)}
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Form>
          <Title tag="h4">Additing new track</Title>
          <Input
            type="select"
            name="Carrier"
            icon={FaTruck}
            label="Carrier"
            options={listCarriers.map((carrier) => carrier.carrier)}
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
          <Button className="mt-8" onClick={handleSave}>
            Save
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default ListTransport;

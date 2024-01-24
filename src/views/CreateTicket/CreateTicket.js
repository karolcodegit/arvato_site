import React, { useContext } from "react";
import Box from "../../components/Box/Box";
import Title from "../../components/Common/Title/Title";
import Form from "../../components/Form/Form";
import { FaTruck } from "react-icons/fa6";
import Button from "../../components/Button/Button";
import { SettingsContext } from "../../contexts/settings/SettingsContext";
import TextInput from "../../components/Common/TextInput/TextInput";
import Select from "../../components/Common/Select/Select";

const CreateTicket = () => {
  const { numberOfPacks } = useContext(SettingsContext);

  const handleInputChange = (e) => {};
  const handleSaveRecord = () => {};

  const priority_status = [
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];
  const departmant = [{ value: "DC15", label: "DC15" }];

  const packs = Array.from({ length: numberOfPacks }, (v, i) => ({
    value: i + 1,
    label: i + 1,
  }));
  return (
    <Box col className="flex w-full ">
      <Title tag="h3">Report</Title>
      <Form>
        <Select
          name="Department"
          icon={FaTruck}
          label="Department"
          options={departmant.map((item) => item.label)}
          onChange={handleInputChange}
        />
        <Select
          name="Pack"
          icon={FaTruck}
          label="Pack"
          options={packs.map((item) => item.label)}
          onChange={handleInputChange}
        />

        <Select
          name="Priority"
          icon={FaTruck}
          label="Priority"
          options={priority_status.map((priority) => priority.label)}
          onChange={handleInputChange}
        />
        <TextInput
          name="Location"
          icon={FaTruck}
          label="License Truck"
        />

        <Button className="mt-8" onClick={handleSaveRecord}>
          Save
        </Button>
      </Form>
    </Box>
  );
};

export default CreateTicket;

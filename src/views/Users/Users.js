import React, { useContext, useMemo, useState } from "react";
import Button from "../../components/Button/Button";
import Title from "../../components/Common/Title/Title";
import Input from "../../components/Input/Input";
import Box from "../../components/Box/Box";
import { UsersContext } from "../../services/firebase/users";
import Modal from "../../components/Common/Modal/Modal";
import Form from "../../components/Form/Form";
import { addUser } from "../../services/firebase/registerUster";
import { DepartmentIcon, KeyIcon, PlusIcon, UserIcon } from "../../components/Common/Icons/Icons";
import Notification from "../../components/Common/Notification/Notification";
import Table from "../../components/Table/Table";
import StatusCell from "../../components/Common/StatusCell/StatusCell";

const Users = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "Name",
      },
      {
        Header: "Surname",
        accessor: "Surname",
      },
      {
        Header: "Department",
        accessor: "Department",
      },
      {
        Header: "Role",
        accessor: "Role",
        Cell: ({cell: {value}}) => <StatusCell status={value} />
      },
    ],
    []
  );
  const users = useContext(UsersContext);
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [department, setDepartment] = useState("DC15");
  const [group, setGroup] = useState("Admin");
  const [password, setPassword] = useState("admin123");

  const departments = [{ id: 1, name: "DC15" } ];
  const roles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Normal" },
  ];


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'Name':
        setName(value);
        break;
      case 'Surname':
        setSurname(value);
        break;
      case 'Department':
        setDepartment(value);
        break;
      case 'Group':
        setGroup(value);
        break;
      case 'Password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const closeModal = () => {
    setShowModal(false);
  }

  const handleSave = async () => {
    
    try {
      await addUser({
        Name: name,
        Surname: surname,
        Department: department,
        Group: group,
        
      }, password);
      setNotification({ message: 'User added successfully', type: 'success' });
    } catch (e) {
      setNotification({ message: 'Failed', type: 'error' });
    }
    closeModal();
  };

  return (
    <>
    {notification.message && <Notification message={notification.message} type={notification.type} />}
      <Box col>
        <div className="flex items-center justify-between gap-8 mb-8">
          <div>
            <Title tag="h2">Users list</Title>
          </div>
          <div>
            <Button
              type="button"
              bg="bg-gray-700"
              onClick={() => setShowModal(true)}
            ><PlusIcon className='mr-4 w-4 h-4 font-bold' />
              Add user
            </Button>
          </div>
        </div>
      </Box>
      <Table columns={columns} data={users} role={roles}/>
      {showModal && (
        <Modal isOpen={showModal} onClose={closeModal}>
          <Form>
            <Title tag="h4">New user</Title>
            <Input
              type="text"
              name="Name"
              icon={UserIcon}
              label="Name"
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="Surname"
              icon={UserIcon}
              label="Surname"
              onChange={handleInputChange}
            />
            <Input
              type="select"
              name="Department"
              icon={DepartmentIcon}
              label="Department"
              options={departments.map((department) => department.name)}
              onChange={handleInputChange}
            />
            <Input
              type="select"
              name="Role"
              // icon={FaTruck}
              label="Group"
              options={roles.map((role) => role.name)}
              onChange={handleInputChange}
            />
            <Input
              type="password"
              name="Password"
              icon={KeyIcon}
              label="Password"
              onChange={handleInputChange}
            />
            <Button className="mt-8" onClick={handleSave}>
              Save
            </Button>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default Users;

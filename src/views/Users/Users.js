import React from "react";
import Table from "../../components/Table/Table";
import { CiSearch } from "react-icons/ci";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";

const Users = () => {
  const headers = ["Member", "Functions", "Created"];
  const data = [
    {
      Member: "Karol Znojkiewicz",
      Functions: "Administration",
      Created: "2021-09-01",
    },
  ];
  return (
    <Table
      headers={headers}
      data={data}
      headerComponent={
        <>
          <div className="flex items-center justify-between gap-8 mb-8">
            <div>
              <Title tag="h3">User list</Title>
            </div>
            <div>
              <Button type="button" bg="bg-gray-700">
                Add user
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between gap-8 mb-8">
            <div></div>
            <div className="w-full md:w-72">
              <div className="relative w-full">
                <Input icon={CiSearch} type="text" placeholder="Search" />
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default Users;

import React, { useState } from "react";
import Title from "../Title/Title";
import HeaderTable from "../HeaderTable/HeaderTable";
import BodyTable from "../BodyTable/BodyTable";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import EditForm from "../EditForm/EditForm";
import Box from "../Box/Box";
import Loading from "../Loading/Loading";

const TablesBig = ({ nameTable, columns, data, addTranck, carrierIcons, isLoading }) => {
  
  const [editData, setEditData] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (transport) => {
    navigate(`/listTransport/${transport.id}`, { state: { editData: transport } });
  }
  return (
    <Box>
    <div className="p-6 pb-0 mb-5 border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex justify-between items-center">
      <Title tag="h5">{nameTable}</Title>
      <Button onClick={addTranck}>Add truck</Button>
    </div>
    <div className="flex-auto px-0 pt-0 pb-2 ">
      <div className="p-0 overflow-x-auto md:overflow-visible">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Loading />
          </div>
        ) : (
          <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
            <HeaderTable columns={columns} />
            <BodyTable data={data} carrierIcons={carrierIcons} onEdit={handleEdit}/>
            {editData && <EditForm data={editData} />}
          </table>
        )}
      </div>
    </div>
  </Box>
  );
};

export default TablesBig;

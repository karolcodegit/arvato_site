import React, { useMemo, useState } from 'react'
import StatusCell from '../../components/Common/StatusCell/StatusCell';
import Table from '../../components/Common/Table/Table';

const Report = () => {
  const [data, setData] = useState([]);
  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "Date",
      },
      {
        Header: "Typ",
        accessor: "Typ",
      },
      {
        Header: "Priority",
        accessor: "Priority",
      },
      {
        Header: "Location",
        accessor: "Location",
      },
      {
        Header: "Status",
        accessor: "Status",
        Cell: ({cell: {value}}) => <StatusCell status={value} />
      },
    ],
    []
  );

  return (
    
    <Table columns={columns} data={data}/>
  )
}

export default Report
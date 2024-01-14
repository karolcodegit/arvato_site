import { useEffect, useState } from "react";
import { TransportContext } from "./TransportContext";
import { getRecords } from "../../airtable/api";

export const TransportProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [editData, setEditData] = useState(null);
  const [baseId, setBaseId] = useState("app1pZi9VU5pPRXs9");
  const [tableName, setTableName] = useState("Transport");
  const [isDataLoaded, setIsDataLoaded] = useState(false);


  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setRefresh(prevRefresh => !prevRefresh);
      resolve();
    });
  };
  useEffect(() => {
    if (baseId && tableName) {
      setIsLoading(true);
      getRecords(baseId, tableName)
        .then((records) => {
          const formattedData = records
            .map((record) => {
              if (record) {
                return {
                  id: record.id,
                  ...record,
                };
              } else {
                return null;
              }
            })
            .filter((record) => record !== null);
          setData(formattedData);
          setIsLoading(false);
          setIsDataLoaded(true);
        })
        .catch((error) => {
          console.error("Failed to fetch data:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [refresh, baseId, tableName]);

  return (
    <TransportContext.Provider
      value={{
        data,
        setData,
        fetchData,
        editData, 
        setEditData,
        fetchData,
        isDataLoaded,
      }}
    >
      {children}
    </TransportContext.Provider>
  );
};

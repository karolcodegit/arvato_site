import { useEffect, useState } from "react";
import { getRecords } from "../services/api";
import { TransportContext } from "./TransportContext";


export const TransportProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        setIsLoading(true); 
        getRecords("app1pZi9VU5pPRXs9", "Transport")
            .then((records) => {
                const formattedData = records
                    .map((record) => {
                        if (record) {
                            return {
                                id: record.id,
                                // id: `${record.Carrier}-${record["Carrier number"]}`,
                                date: record.Date,
                                carrier: record.Carrier,
                                transportNumber: record["Carrier number"],
                                tractorNumber: record["License truck"],
                                trailerNumber: record["License trailer"],
                                seal: record.Seal,
                                // departure: record.Departure,
                                status: record.Status,
                                package: record.Package,
                                pallets: record.Pallets,
                                weight: record.Weight,
                                pager: record.Pager,
                                // message: record.Message,
                            };
                        } else {
                            return null;
                        }
                    })
                    .filter((record) => record !== null);
                setData(formattedData);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Failed to fetch data:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [refresh])

    return (
        <TransportContext.Provider value={{ data, setData, isLoading, setRefresh }}>
            {children}
        </TransportContext.Provider>
    )
}
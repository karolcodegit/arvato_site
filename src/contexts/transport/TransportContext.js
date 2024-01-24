import { createContext } from "react";

export const TransportContext = createContext({
  data: [], // domyślna wartość dla data
  setData: () => {}, // domyślna wartość dla setData, pusta funkcja
  setRefresh: () => {}, // domyślna wartość dla setRefresh, pusta funkcja
  editData: null, // domyślna wartość dla editData
  fetchData: () => new Promise((resolve, reject) => {}), // domyślna wartość dla fetchData, pusta funkcja
});

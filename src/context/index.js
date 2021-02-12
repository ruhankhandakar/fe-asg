import { createContext } from "react";

import data from "../data/data.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const providerValue = {
    data,
  };
  return (
    <DataContext.Provider value={providerValue}>
      {children}
    </DataContext.Provider>
  );
};

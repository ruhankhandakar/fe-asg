import { createContext, useState } from "react";

import data from "../data/data.json";

export const DataContext = createContext();

const INITIAL_STATE = {
  columnName: [
    {
      key: "Name",
      value: "name",
    },
    {
      key: "Screen Name",
      value: "screen_name",
    },
    {
      key: "Followers Count",
      value: "followers_count",
    },
    {
      key: "Following Count",
      value: "following_count",
    },
    {
      key: "Location",
      value: "location",
    },
    {
      key: "Verified",
      value: "verified",
    },
  ],
  operators: [
    {
      value: "CONTAINS",
      key: "Contains",
    },
    {
      value: "GTE",
      key: ">=",
    },
    {
      value: "LTE",
      key: "<=",
    },
    {
      value: "EQ",
      key: "Equals",
    },
  ],
};

export const DataProvider = ({ children }) => {
  const [columnNames, setColumnNames] = useState(
    () => INITIAL_STATE.columnName
  );

  const providerValue = {
    data,
    columnNames,
    operators: INITIAL_STATE.operators,
  };
  const providerFunctions = {
    setColumnNames,
  };

  const mergedValue = {
    ...providerValue,
    ...providerFunctions,
  };
  return (
    <DataContext.Provider value={mergedValue}>{children}</DataContext.Provider>
  );
};

import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import DataReducer from "./Reducer";
import { ADD_FILTER } from "./actionType";

import data from "../data/data.json";

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
  conditions: [],
};

export const DataContext = createContext(INITIAL_STATE);

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, INITIAL_STATE);

  const providerValue = {
    data,
    ...state,
  };

  const addFilter = () => {
    const newCondition = {
      uid: uuidv4(),
      id: "",
      operator: "",
      value: "",
    };
    dispatch({
      type: ADD_FILTER,
      payload: newCondition,
    });
  };

  const providerFunctions = {
    addFilter,
  };

  const mergedValue = {
    ...providerValue,
    ...providerFunctions,
  };
  return (
    <DataContext.Provider value={mergedValue}>{children}</DataContext.Provider>
  );
};

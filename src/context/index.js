import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import DataReducer from "./Reducer";
import {
  ADD_FILTER,
  REMOVE_FILTER,
  CHANGE_WHERE_CONDITION,
  INPUT_CHANGE,
} from "./actionType";

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
  whereCondition: "AND",
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
      id: undefined,
      operator: undefined,
      value: undefined,
    };
    dispatch({
      type: ADD_FILTER,
      payload: newCondition,
    });
  };
  const removeFilter = (uid) => {
    dispatch({
      type: REMOVE_FILTER,
      payload: uid,
    });
  };
  const changeWhereCondition = (value) => {
    dispatch({
      type: CHANGE_WHERE_CONDITION,
      payload: value,
    });
  };
  const inputChange = (uid, name, value) => {
    dispatch({
      type: INPUT_CHANGE,
      payload: {
        uid,
        name,
        value,
      },
    });
  };

  const providerFunctions = {
    addFilter,
    removeFilter,
    changeWhereCondition,
    inputChange,
  };

  const mergedValue = {
    ...providerValue,
    ...providerFunctions,
  };
  return (
    <DataContext.Provider value={mergedValue}>{children}</DataContext.Provider>
  );
};

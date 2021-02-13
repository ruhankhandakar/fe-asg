import { ADD_FILTER } from "./actionType";

const DataReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FILTER:
      return {
        ...state,
        conditions: [payload, ...state.conditions],
      };
    default:
      return state;
  }
};

export default DataReducer;

import { ADD_FILTER, REMOVE_FILTER } from "./actionType";

const DataReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FILTER:
      return {
        ...state,
        conditions: [payload, ...state.conditions],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        conditions: state.conditions.filter((item) => item.uid !== payload),
      };
    default:
      return state;
  }
};

export default DataReducer;

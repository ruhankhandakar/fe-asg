import {
  ADD_FILTER,
  REMOVE_FILTER,
  CHANGE_WHERE_CONDITION,
} from "./actionType";

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
    case CHANGE_WHERE_CONDITION:
      return {
        ...state,
        whereCondition: payload,
      };
    default:
      return state;
  }
};

export default DataReducer;

import {
  ADD_FILTER,
  REMOVE_FILTER,
  CHANGE_WHERE_CONDITION,
  INPUT_CHANGE,
} from "./actionType";

const DataReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FILTER:
      return {
        ...state,
        conditions: [...state.conditions, payload],
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
    case INPUT_CHANGE:
      return {
        ...state,
        conditions: state.conditions.map((item) => {
          if (item.uid === payload.uid) {
            if (payload.name === "id") {
              return {
                ...item,
                [payload.name]: payload.value,
                operator: undefined,
                value: undefined,
              };
            } else {
              return {
                ...item,
                [payload.name]: payload.value,
              };
            }
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default DataReducer;

import calculate from "./calculate";
import { VALUE, OPERATION, CLEAR } from "../constants/common";

export const initialState = {
  operation: "=",
  result: 0,
  value: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case VALUE: {
      return { ...state, value: state.value + action.value };
    }
    case OPERATION: {
      return {
        ...state,
        operation: action.value,
        result: calculate(state),
        value: ""
      };
    }
    case CLEAR:
    default: {
      return initialState;
    }
  }
};

export default reducer;

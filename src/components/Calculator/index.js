import React, { useReducer } from "react";
import reducer, { initialState } from "../../utils/reducer";
import Display from "./Display";
import Keypad from "./Keypad";
import Logo from "./logo.png";

import "./Calculator.css";

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const value = state.value === "" ? state.result : state.value;

  return (
    <div className="calc">
      <img src={Logo} className="calc__logo" alt="logo" />
      <Display value={value} />
      <Keypad dispatch={dispatch} />
    </div>
  );
};

export default Calculator;

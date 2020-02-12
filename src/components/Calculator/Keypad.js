import React from "react";
import { OPERATION, VALUE, CLEAR } from "../../constants/common";

const Key = ({ label, action }) => (
  <button className="calc__key" onClick={action}>
    {label}
  </button>
);

const Keypad = ({ dispatch }) => {
  const numberKeys = new Array(10).fill().map((_, i) => [i, VALUE]);

  const opKeys = [
    ["+", OPERATION],
    ["-", OPERATION],
    ["*", OPERATION],
    ["/", OPERATION],
    ["=", OPERATION]
  ];

  return (
    <div className="calc__keypad">
      {numberKeys.concat(opKeys).map(([value, type]) => (
        <Key
          key={value}
          label={value}
          action={() => dispatch({ type, value })}
        />
      ))}
      <Key label={"C"} action={() => dispatch({ type: CLEAR })} />
    </div>
  );
};

export default Keypad;

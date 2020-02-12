import React from "react";

const Display = ({ value }) => (
  <div className="calc__display">
    <input
      type="text"
      className="calc__display__input"
      value={value}
      data-testid="display-input"
      readOnly
    />
  </div>
);

export default Display;

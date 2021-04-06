import React from "react";
import "./style.css";
import PropTypes from "prop-types";

function FullInput({ placeholder, change, name, value }) {
  return (
    <div className="input-root">
      <input
        name={name}
        value={value}
        onChange={change}
        placeholder={placeholder}
      />
    </div>
  );
}

FullInput.defaultProps = {
  placeholder: "Placeholder requied *",
};

export default FullInput;

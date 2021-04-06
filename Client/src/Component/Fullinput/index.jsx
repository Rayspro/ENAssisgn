import React from "react";
import "./style.css";
import PropTypes from "prop-types";

function FullInput({ placeholder, change, name, value, type }) {
  return (
    <div className="input-root">
      <input
        name={name}
        value={value}
        onChange={change}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

FullInput.defaultProps = {
  placeholder: "Placeholder requied *",
  type:"text"
};

export default FullInput;

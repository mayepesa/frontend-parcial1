import React from "react";

const Input = ({label,id,type,name,handleChange}) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        onChange={handleChange}
        className="input"
      />
    </div>
  );
};

export default Input;

import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";

const Input = styled("input")`
  /* font-size: ${(props) => props.size}; */
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  background-color: #eee;
  border: none;
  border-radius: 5px;
  &:hover {
    border: 1px solid blueviolet;
  }
`;

const FormInput = ({
  name,
  type,
  placeholder,
  onChange,
  value,
  error,
  children,
  label,
  ...props
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Input
        required
        // size='1em'
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={error && { border: "solid 1px red" }}
      />
      {error && <p>{error}</p>}
    </>
  );
};

// FormInput.defaultProps = {
//   type: 'text',
//   className: '',
// };

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  // type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password", "email"]),

  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;

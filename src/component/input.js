import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";

const Label = styled.label`
  margin: 0.5em 0;
  color: #fff;
`;
const Input = styled("input")`
  /* font-size: ${(props) => props.size}; */
  padding: 0.6em 1em;
  background: #ffffff13;
  border: none;
  border-bottom: 1px #a30d83 solid;
  color: #fff;
  /* margin-top: 0.2em; */
  margin-bottom: 0.5em;
  font-size: 0.9rem;
  transition: 0.073s ease-in;
  border-radius: 4px 4px 0 0;
  width: 100%;
  :hover,
  :focus {
    background: #ffffff23;
    /* border: none; */
    border-radius: 4px;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #ccc;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #ccc;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #ccc;
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
      <Label htmlFor={name}>{label}</Label>
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

import React from "react";
import styled from "@emotion/styled";

const Form = styled("form")`
  width: 100%;

  padding: 10px;
  /* margin: 0 auto; */
  box-sizing: border-box;
  /* text-align: center; */
`;
const Button = styled("button")`
  background: #ffffff13;
  color: #fff;
  padding: 10px 50px;
  margin: 20px 0;
  border: 1px solid #fff;
  border-radius: 30px;
  &:hover {
    background-color: #ccc;
    color: #000;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const FormWrapper = ({ children, label, onSubmit, isInvalid }) => {
  return (
    <Form onSubmit={onSubmit}>
      {children}
      {/* <Button type='submit' label={label} className='button' /> */}
      <Button type="submit" disabled={isInvalid}>
        {label}
      </Button>
    </Form>
  );
};

export default FormWrapper;

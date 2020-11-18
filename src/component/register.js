import React, { useState } from "react";
import styled from "@emotion/styled";
import { AboutContainer } from "./about";
import FormWrapper from "./formComp";
import FormInput from "./input";
import { Container } from "react-bootstrap";

const initialState = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
  submitted: false,
};

const Register = () => {
  const [user, setUser] = useState(initialState);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { submitted, error, username, email, passwordOne, passwordTwo } = user;

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === "";
  return (
    <Wrap2>
      <AboutContainer>
        {/* <h2>REGISTER</h2> */}
        <Container>
          <FormWrapper label="SIGN UP" isInvalid={isInvalid}>
            <h2>JOIN US</h2>
            <FormInput
              type="text"
              value={username}
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <FormInput
              type="email"
              value={email}
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <FormInput
              type="password"
              value={passwordOne}
              placeholder="Password"
              name="passwordOne"
              onChange={handleChange}
            />
            <FormInput
              type="password"
              value={passwordTwo}
              placeholder="Confirm Password"
              name="passwordTwo"
              onChange={handleChange}
            />

            {user.error && <p>{error.message}</p>}
          </FormWrapper>
        </Container>
      </AboutContainer>
    </Wrap2>
  );
};

export default Register;

const Wrap2 = styled.div`
  background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
`;

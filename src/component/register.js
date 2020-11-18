import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";
import { AboutContainer } from "./about";
import FormWrapper from "./formComp";
import FormInput from "./input";
import { Container } from "react-bootstrap";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  name: "",
  email: "",
  state: "",
  city: "",
  education: "",
  experience: "",
  error: null,
  submitted: false,
};

const Register = () => {
  const [user, setUser] = useState(initialState);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const {
    submitted,
    error,
    name,
    email,
    state,
    city,
    education,
    experience,
  } = user;

  // const isInvalid =
  //   passwordOne !== passwordTwo ||
  //   passwordOne === "" ||
  //   email === "" ||
  //   username === "";
  return (
    <Wrap2>
      <div className="registerWrapper">
        <Container>
          <FormWrapper label="SIGN UP">
            <h2>JOIN US</h2>
            <FormFlex>
              <div>
                <FormInput
                  label="Full Name"
                  type="text"
                  value={name}
                  placeholder="Enter your full name"
                  name="name"
                  onChange={handleChange}
                />
                <FormInput
                  label="Email"
                  type="email"
                  value={email}
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                <FormInput
                  label="State of Residence"
                  type="text"
                  value={state}
                  placeholder="State"
                  name="state"
                  onChange={handleChange}
                />
              </div>
              <div>
                <FormInput
                  label="City"
                  type="text"
                  value={city}
                  placeholder="Enter your city"
                  name="city"
                  onChange={handleChange}
                />
                <FormInput
                  label="Educational Level"
                  type="text"
                  value={education}
                  placeholder="B.A, SSCE, Masters..."
                  name="education"
                  onChange={handleChange}
                />
                <FormInput
                  label="Coding Experience"
                  type="text"
                  value={experience}
                  placeholder="Do you have any coding knowledge"
                  name="experience"
                  onChange={handleChange}
                />
              </div>
              {user.error && <p>{error.message}</p>}
            </FormFlex>
          </FormWrapper>
          <hr />
          <div className="socialsContainer">
            <FontAwesomeIcon icon={faPhone} className="socials" />

            <FontAwesomeIcon icon={faPhone} className="socials" />

            <FontAwesomeIcon icon={faPhone} className="socials" />
          </div>
        </Container>
      </div>
    </Wrap2>
  );
};

export default Register;

const Wrap2 = styled.div`
  background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);

  padding: 8em 0 4em 0;

  h2 {
    text-align: center;
    padding-bottom: 1em;
    color: #fff;
  }

  @media (max-width: 700px) {
    padding: 2.5em 0;
  }

  .socialsContainer {
    padding-top: 2em;
    display: flex;
    justify-content: center;
  }
  .socials {
    font-size: 22px;
    width: 48px;
    height: 48px;
    padding: 12px 0;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 50%;
    transition: all 0.3s;
    margin: 0 1em;

    :hover,
    :focus {
      background: #fff;
      color: #5ca9fb;
    }
  }
`;
const FormFlex = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: 540px;
  }
  @media (max-width: 700px) {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
`;

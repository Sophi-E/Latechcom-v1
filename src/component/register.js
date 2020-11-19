import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";
import AOS from "aos";
import Axios from "axios";
import FormWrapper from "./formComp";
import FormInput from "./input";
import { Container, Alert } from "react-bootstrap";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

AOS.init();

const initialState = {
  name: "",
  email: "",
  state: "",
  city: "",
  education: "",
  experience: "",
};

const Endpoint =
  "https://rocky-scrubland-02917.herokuapp.com/leaner/registration";

const Register = () => {
  const [user, setUser] = useState(initialState);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { name, email, state, city, education, experience } = user;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    Axios.post(Endpoint, user)
      .then((res) => console.log(res.request.status))
      .catch((err) => console.error(err));

    setTimeout(() => {
      setUser(initialState);
      setShow(true);
    }, 2000);
  };

  return (
    <Wrap2 id="register">
      <Container>
        <div className="registerWrapper">
          <h2 className="register">JOIN US</h2>

          {show ? (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
              <p>Registration Successful!</p>
            </Alert>
          ) : (
            <p className="notice">
              We are excited to have you in the community. Please, register
              below.
            </p>
          )}

          <FormWrapper label="REGISTER" onSubmit={handleFormSubmit}>
            <FormFlex
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
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
            </FormFlex>
          </FormWrapper>
          <hr />
          <div className="socialsContainer">
            <a href="https://twitter.com/latechcom">
              <FontAwesomeIcon icon={faTwitter} className="socials" />
            </a>

            <a href="https://instagram.com/latechcomm">
              <FontAwesomeIcon icon={faInstagram} className="socials" />
            </a>

            <a href="https://linkedin.com/latechcom">
              <FontAwesomeIcon icon={faLinkedin} className="socials" />
            </a>
          </div>
        </div>
      </Container>
    </Wrap2>
  );
};

export default Register;

const Wrap2 = styled.div`
  /* background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%); */
  background: #004aad;
  padding: 8em 0 4em 0;

  .registerWrapper {
    background: #ffffff13;
    padding: 2em;
    border-radius: 5px;
  }
  h2 {
    text-align: center;
    padding-bottom: 15px;
    color: #fff;
  }
  .notice {
    color: #ccc;
    padding: 1em;
  }
  @media (max-width: 700px) {
    padding: 2.5em 0;

    .registerWrapper {
      padding: none;
      background: none;
    }
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
    width: 500px;
  }
  @media (max-width: 700px) {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
`;

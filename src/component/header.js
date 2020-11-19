import React from "react";
import styled from "@emotion/styled";

import bg from "./bg.jpg";

const Header = () => {
  return (
    <ImageWrapper>
      <div className="header-text">
        <h1 className="intro">
          WE ARE <br />
          LATECHCOM
        </h1>
        <p>
          It doesn't matter what your experience level is. We aim to learn
          everyday and we are a good community to aid you in your journey.
        </p>
      </div>
    </ImageWrapper>
  );
};

export default Header;

const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 55px;
  position: relative;
  display: table;
  width: 100%;
  height: 90vh;
  padding: 0;

  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bg}) center center no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;

  .header-text {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    h1 {
      font-size: 5em;
    }
    p {
      padding-top: 0.2em;
      font-size: 1.4em;
      width: 700px;
    }
    @media (max-width: 700px) {
      h1 {
        font-size: 2.5em;
      }
      p {
        font-size: 1em;
        width: 100%;
      }
    }
  }
`;

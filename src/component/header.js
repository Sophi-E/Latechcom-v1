import React from "react";
import styled from "@emotion/styled";
import bg from "./bg.jpg";

const Header = () => {
  return (
    <ImageWrapper>
      {/* <Image src={bg} fluid /> */}
      {/* <img src={bg} alt="laptop" /> */}
      <div>
        <h3 className="intro">WE ARE LATECHCOM</h3>
      </div>
    </ImageWrapper>
  );
};

export default Header;

const ImageWrapper = styled.div`
  width: 100%;

  .intro {
    display: table;
    width: 100%;
    height: 90vh;
    padding: 0;
    background: url(${bg}) center center no-repeat;
    background-color: #e5e5e5;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
  }
  h3 {
    padding-top: 350px;
    padding-bottom: 200px;
    text-align: center;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
`;

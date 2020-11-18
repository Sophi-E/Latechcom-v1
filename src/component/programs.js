import React from "react";
import Container from "react-bootstrap/esm/Container";
import {
  faLaptopCode,
  faPaintBrush,
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";
import ProgramCard from "./programCard";
import styled from "@emotion/styled";
import { AboutContainer } from "./about";

const Programs = () => {
  return (
    <Wrap>
      <AboutContainer>
        <h2>PROGRAMS</h2>
        <Container>
          <ProgramsWrapper>
            <ProgramCard
              icon={faLaptopCode}
              title="Web Development"
              text="Learn the basics of web development. Learn how to create beautiful and ."
            />

            <ProgramCard
              icon={faPhotoVideo}
              title="App Development"
              text="Learn how to develop mobile applications online with free mentorship from exp."
            />

            <ProgramCard
              icon={faPaintBrush}
              title="Product Design"
              text="Learn how to create aesthetically pleasing products free with mentors at Latechcom."
            />
          </ProgramsWrapper>
        </Container>
      </AboutContainer>
    </Wrap>
  );
};

export default Programs;

const ProgramsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Wrap = styled.div`
  background: #f6f6f6;
`;

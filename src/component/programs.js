import React from "react";
import Container from "react-bootstrap/esm/Container";
import AOS from "aos";

import {
  faLaptopCode,
  faPaintBrush,
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";
import ProgramCard from "./programCard";
import styled from "@emotion/styled";
import { AboutContainer } from "./about";

AOS.init();

const Programs = () => {
  return (
    <Wrap
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
      id="programs"
    >
      <AboutContainer>
        <h2>PROGRAMS</h2>
        <Container>
          <ProgramsWrapper>
            <ProgramCard
              icon={faLaptopCode}
              title="Tech Mentorship"
              text="We provide mentorship and guidance for people in the tech space finding it difficult or just need someone to hold their hands every once a while."
            />

            <ProgramCard
              icon={faPhotoVideo}
              title="Software Development"
              text="Come learn how to develop web and mobile applications online from experienced developers in our software development program."
            />

            <ProgramCard
              icon={faPaintBrush}
              title="Product Design"
              text="Have you always had a eye for colors and layout? You can learn how to create aesthetically pleasing product designs free with instructors at Latechcom."
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

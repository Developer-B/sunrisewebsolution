import React from "react";
import styled from "styled-components";
import "../Styling/GlobalStyle.css";
import video from "../Videos/AboutVideo.mp4";

const Container = styled.div`
  text-align: center;
  margin-left: 50px;
  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;

const Heading = styled.h2`
  margin-top: 50px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-right: 50px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Text = styled.div`
  text-align: left;
  max-width: 100%;
  padding: 0 20px;

  @media only screen and (min-width: 768px) {
    flex: 2;
    max-width: 100%;
    padding: 0;
  }
`;

const VideoContainer = styled.div`
  width: 300px; /* Adjust size as needed */
  height: 300px; /* Adjust size as needed */
  border-radius: 50%; /* This creates the circular shape */
  overflow: hidden; /* Ensures the video stays within the circular container */
  margin-bottom: 20px; /* Adjust spacing as needed */
  padding: 20px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video fills the circular container */
`;

const About = () => {
  return (
    <Container>
      <Heading className="h2_heading">About</Heading>
      <Content>
        <VideoContainer>
          <Video autoPlay muted loop>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </VideoContainer>
        <Text>
          <p>
            <strong>
              Welcome to Sunrise Web Solutions - Your Gateway to Digital Success
            </strong>
            <br />
            <br />
            At Sunrise Web Solutions, we illuminate your path to digital
            excellence. As a dynamic web solutions company, we specialize in
            crafting vibrant and effective online experiences that empower
            businesses to thrive in the digital landscape. Whether you're a
            startup looking to establish a strong online presence or an
            established enterprise seeking to elevate your digital strategy, our
            dedicated team is committed to delivering innovative solutions that
            captivate audiences, drive engagement, and achieve tangible results.
          </p>
          <p>
            <strong>Let's Illuminate Your Digital Journey</strong>
            <br />
            <br />
            Embark on a journey to digital success with{" "}
            <strong>Sunrise Web Solutions</strong> by your side. Contact us
            today to discuss your project and discover how we can help you
            achieve your digital goals with confidence and creativity. Together,
            let's make your vision a reality and shine bright in the digital
            world.
          </p>
        </Text>
      </Content>
    </Container>
  );
};

export default About;

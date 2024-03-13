import React from "react";
import styled from "styled-components";
import Videos from "../Videos/BannerVideo.mp4";

const VideoBanner = () => {
  return (
    <BannerVideoContainer className="video-banner-container">
      <video autoPlay muted loop className="video-banner">
        <source src={Videos} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ContentOverlay>
        <h1>Welcome to Sunrise Web Solution</h1>
        <p>Explore our services and products</p>
      </ContentOverlay>
    </BannerVideoContainer>
  );
};

const BannerVideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;

  .video-banner {
    width: 100%;
    height: auto;
    max-height: 90vh;
    object-fit: cover;
  }
`;

const ContentOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  z-index: 2;

  @media only screen and (max-width: 1200px) {
    font-size: 1.5em;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.2em;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1em;
  }
`;

export default VideoBanner;

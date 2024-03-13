import React from "react";
import styled from "styled-components";
import LogoSlider from "./LogoSlider";
import "../Styling/GlobalStyle.css";
import logo from "../Images/logo.png";

// Define a styled component for the app container
const AppContainer = styled.div`
  max-width: 1200px; /* Adjust maximum width based on your design */
  margin: 0 auto; /* Center the container horizontally */
  padding: 20px; /* Add padding to the container */

  @media only screen and (max-width: 768px) {
    padding: 10px; /* Adjust padding for smaller screens */
  }
`;

// Define a styled component for the heading
const Heading = styled.h2`
  padding: 50px;

  @media only screen and (max-width: 768px) {
    padding: 20px; /* Adjust heading padding for smaller screens */
    font-size: 1.5rem; /* Decrease font size for smaller screens */
  }

  @media only screen and (max-width: 576px) {
    padding: 10px; /* Further adjust heading padding for smaller screens */
    font-size: 1.2rem; /* Decrease font size for even smaller screens */
  }
`;

const App = () => {
  const logos = [
    logo,
    logo,
    logo,
    logo,
    // Add more logos as needed
  ];

  return (
    <AppContainer>
      <Heading className="h2_heading">Our Clients</Heading>
      <LogoSlider logos={logos} />
    </AppContainer>
  );
};

export default App;

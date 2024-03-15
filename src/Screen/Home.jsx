import React from "react";
import VideoBanner from "../Components/VideoBanner";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import OurServiceCard from "../Components/OurServiceCard";
import Products from "../Screen/Products";
import LogoApp from "../Components/LogoApp";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import styles from "../Styling/Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <VideoBanner />
      <About />
      <OurServiceCard />
      <Products />
      <LogoApp />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;

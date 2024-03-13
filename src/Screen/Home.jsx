import React from "react";
import VideoBanner from "../Components/VideoBanner";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import CardCarousel from "../Components/CardCarousel";
import Products from "../Screen/Products";
import LogoApp from "../Components/LogoApp";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import styles from "../Styling/Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <VideoBanner />
      <About />
      <CardCarousel />
      <Products />
      <LogoApp />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;

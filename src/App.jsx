import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screen/Home";
import About from "./Screen/About";
import Services from "./Screen/Services";
import WebsiteDesign from "./Screen/WebsiteDesign";
import WebApplicationDevelopment from "./Screen/WebApplicationDevelopment";
import SoftwareDevelopment from "./Screen/SoftwareDevelopment";
import MobileApp from "./Screen/MobileApp";
import GraphicsDesign from "./Screen/GraphicsDesign";
import WebHosting from "./Screen/WebHosting";
import DomainRegistration from "./Screen/DomainRegistration";
import Products from "./Screen/Products";
import Contact from "./Screen/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Services/WebsiteDesign" element={<WebsiteDesign />} />
          <Route
            path="/Services/WebApplicationDevelopment"
            element={<WebApplicationDevelopment />}
          />
          <Route
            path="/Services/SoftwareDevelopment"
            element={<SoftwareDevelopment />}
          />
          <Route path="/Services/MobileApp" element={<MobileApp />} />
          <Route path="/Services/GraphicsDesign" element={<GraphicsDesign />} />
          <Route path="/Services/WebHosting" element={<WebHosting />} />
          <Route
            path="/Services/DomainRegistration"
            element={<DomainRegistration />}
          />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

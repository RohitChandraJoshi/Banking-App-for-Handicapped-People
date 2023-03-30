import React from "react";
import Header from "./header";
import LandingPage from "./LandingPage";
import Feature from "./feature";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";

const Home = () => {
  return (
    <main>
      {/* <Header /> */}
      <LandingPage />
      <About />
      <Feature />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;

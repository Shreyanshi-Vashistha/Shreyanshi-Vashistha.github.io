import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BgImg2 from "../components/BgImg2";
import AboutMe from "../components/AboutMe";

const about = () => {
  return (
    <div>
      <Navbar />
      <BgImg2
        heading="Meet the Architect of Digital Dreams"
        text="Driven by Passion, Defined by Innovation."
      />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default about;

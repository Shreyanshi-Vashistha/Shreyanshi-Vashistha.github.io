import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BgImg2 from "../components/BgImg2";
import Work from "../components/Work";

const project = () => {
  return (
    <div>
      <Navbar />
      <BgImg2 heading="Bringing Ideas to Life" text="One Project at a Time" />
      <Work />
      <Footer />
    </div>
  );
};

export default project;

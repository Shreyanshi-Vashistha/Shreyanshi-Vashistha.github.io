import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BgImg2 from "../components/BgImg2";
import ContactMeForm from "../components/ContactMeForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <BgImg2 heading="Unlocking the Web Dreams" text="Get in Touch" />
      <ContactMeForm />
      <Footer />
    </div>
  );
};

export default Contact;

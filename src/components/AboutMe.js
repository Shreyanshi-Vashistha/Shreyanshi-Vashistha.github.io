import React from "react";
import { Link } from "react-router-dom";

import "../styles/AboutMe.css";
import aboutMe from "../assets/aboutMe.jpg";
import aboutMe2 from "../assets/aboutMe2.jpg";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> Who Am I?</h1>
        <p>
          I'm a Full Stack Web Developer with four years of experience. I am a
          passionate technophile who thrives on crafting dynamic and innovative
          web solutions. My journey in the realm of web development has equipped
          me with a deep understanding of both front-end and back-end
          technologies, allowing me to seamlessly bridge the gap between design
          and functionality. With a keen eye for detail, I take pride in
          transforming complex ideas into user-friendly web applications,
          ensuring a delightful user experience. My passion for web development
          is not just a profession; it's a driving force that fuels my
          continuous growth and innovation in this ever-evolving field.
        </p>

        <Link to="/contact">
          <button className="btn"> Contact </button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="stack top">
            <img src={aboutMe2} className="img" alt="true" />
          </div>
          <div className="stack bottom">
            <img src={aboutMe} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

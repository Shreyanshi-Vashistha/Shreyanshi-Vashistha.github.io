import "../styles/BgImg.css";
import MainImg from "../assets/bgimg.jpg";

import React from "react";
import { Link } from "react-router-dom";
import SV_Resume from "../assets/Shreyanshi_Vashistha_Resume.pdf";
import Typewriter from "./Typewriter";

const BgImg = () => {
  // const text = ["Hey! I'm a Full-Stack", "Web Developer"];
  return (
    <div className="bg">
      <div className="mask">
        <img className="mainImg" src={MainImg} alt="background" />
      </div>
      <div className="content">
        <p>
          <Typewriter text="Hey! I'm a Full Stack" delay={100} />
        </p>
        <h1>
          <Typewriter text="Web Developer" delay={200} />
        </h1>
        <div>
          <Link to="/projects" className="btn">
            PROJECTS
          </Link>

          <a href={SV_Resume} download="resume.pdf" className="btn-light">
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
};

export default BgImg;

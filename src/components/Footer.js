import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import Logo from "../assets/SVlogo.png";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>60 Frederick St. </p>
              <p>Kitchener, ON, N2H0C7</p>
            </div>
          </div>
          <div className="details">
            <FaPhone
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <div>
              <p>+1(519)830-7680</p>
            </div>
          </div>
          <div className="details">
            <FaMailBulk
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <div>
              <p className="email">shreyanshi.vashistha97@gmail.com</p>
            </div>
          </div>
          <div className="social">
            <Link
              to="https://github.com/Shreyanshi-Vashistha"
              target={"_blank"}
            >
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/shreyanshi-vashistha-64102112a/"
              target={"_blank"}
            >
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
            <Link to="https://twitter.com/Shreyanshi2008" target={"_blank"}>
              <FaTwitter
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
        <div className="right">
          <Link to="/">
            <img src={Logo} alt="" style={{ height: "100%", width: "100%" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

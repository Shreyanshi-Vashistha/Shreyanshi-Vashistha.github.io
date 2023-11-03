// import React from "react";
import "../styles/Navbar.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/SVlogo.png";

const Navbar = () => {
  const [hamClick, setHamClick] = useState(false);
  const handleClick = () => {
    setHamClick(!hamClick);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <img src={Logo} alt="" style={{ height: "30%", width: "30%" }} />
      </Link>
      <ul className={hamClick ? "navMenu active" : "navMenu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {hamClick ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;

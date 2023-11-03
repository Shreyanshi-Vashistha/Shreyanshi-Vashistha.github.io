import "../styles/ProjectCards.css";

import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCards = (props) => {
  return (
    <div className="project-card">
      <img src={props.imageSrc} alt="" />
      <h2 className="title">{props.title}</h2>
      <div className="details">
        <p>{props.desc}</p>
      </div>
      <div className="pro-btns">
        <NavLink to={props.link} className="btn" target="_blank">
          View
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectCards;

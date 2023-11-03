import "../styles/ProjectCards.css";
import ProjectCards from "./ProjectCards";
import WorkData from "./WorkData";

import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">My Web Projects Showcase</h1>
      <div className="project-container">
        {WorkData.map((val, index) => {
          return (
            <ProjectCards
              key={index}
              imageSrc={val.imageSrc}
              title={val.title}
              desc={val.desc}
              link={val.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;

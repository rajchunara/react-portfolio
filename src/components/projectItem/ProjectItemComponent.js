import React from "react";
import "./projectItem.css";

export default function ProjectItemComponent({ project, animationDelay }) {
  return (
    <div
      className="project-item"
      key={project.id}
      data-aos="zoom-in"
      data-aos-delay={animationDelay}
      style={{
        background: `url(${
          process.env.PUBLIC_URL + project.imageUrl
        }) no-repeat center center/cover`,
      }}
    >
      <div className="project-item-details">
        <div className="project-title">
          <p>{project.title}</p>
        </div>
        <div className="item-btns-container">
          <button
            onClick={() => window.open(project.accessButtons.codeUrl)}
            className="code-btn"
          >
            code
          </button>
          <button
            onClick={() => window.open(project.accessButtons.siteUrl)}
            className="site-btn"
          >
            visit
          </button>
        </div>
      </div>
    </div>
  );
}

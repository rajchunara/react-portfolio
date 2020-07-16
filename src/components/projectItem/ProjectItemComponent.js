import React from 'react';
import './projectItem.css';

export default function ProjectItemComponent({ project, animationDelay }) {
  return (
    <div
      className="project-item-container"
      data-aos="zoom-in"
      data-aos-delay={animationDelay}
    >
      <div
        className="project-item"
        key={project.id}
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
        </div>
      </div>
      <div className="item-btns-container">
        {/* render button only if property is defined */}
        {project.accessButtons.codeUrl && (
          <button
            onClick={() => window.open(project.accessButtons.codeUrl)}
            className="code-btn"
          >
            code
          </button>
        )}

        {/* render button only if property is defined */}

        {project.accessButtons.siteUrl && (
          <button
            onClick={() => window.open(project.accessButtons.siteUrl)}
            className="site-btn"
          >
            visit
          </button>
        )}
      </div>
    </div>
  );
}

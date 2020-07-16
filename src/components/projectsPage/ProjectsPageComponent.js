import React from 'react';
import { Projects } from '../../ProjectsData';
import './projectPage.css';
import ProjectItemComponent from '../projectItem/ProjectItemComponent';

export default function ProjectsPageComponent() {
  let projectItems = Projects.filter((project) => project.showOnSite).map(
    (project) => {
      //Generate random animation delay between 300 and 600
      let animationDelay = Math.floor(Math.random() * 4 + 3) * 100;

      return (
        <ProjectItemComponent
          project={project}
          key={project.id}
          animationDelay={animationDelay}
        />
      );
    }
  );

  return (
    <div id="projectCmp" className="project">
      <div className="projectTitle">My Work</div>
      <div className="project-container fade-in-project">{projectItems}</div>
    </div>
  );
}

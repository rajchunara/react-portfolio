import React from 'react';
import {Projects} from '../../ProjectsData';
import './projectPage.css';
import ProjectItemComponent from '../projectItem/ProjectItemComponent';

export default function ProjectsPageComponent() {

    let projectItems = Projects
                        .filter(project => project.showOnSite)
                        .map(project => {
            return (
                <ProjectItemComponent project={project} key={project.id}/>
            );
    })


    return (
            <div className="project-container fade-in-project">
                
                {projectItems}
                
            </div>
       
    )
}

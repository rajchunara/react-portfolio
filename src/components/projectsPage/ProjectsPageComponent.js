import React from 'react';
import {Projects} from '../../ProjectsData';
import './projectPage.css';
import ProjectItemComponent from '../projectItem/ProjectItemComponent';

export default function ProjectsPageComponent() {
    let imgSrc = '/assets/Images/Acme-Website.png';
    console.log(Projects);

    let projectItems = Projects.map(project => {
        if(project.showOnSite){
            return (
                <ProjectItemComponent project={project}/>
            )
        }

        return;
        

    })


    return (
            <div className="project-container">
                
                {projectItems}
                
            </div>
       
    )
}

import React from "react";
import ProjectList from "./ProjectList";

const Projects = () => {
    return(
        <div>
            <div className="projects">
                <div className="project-content">
                    <h2>Projects</h2>
                </div>
                
            </div>
            <div className="project-list container">
                <ProjectList />
            </div>
        </div>
        
    )
}

export default Projects;
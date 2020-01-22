import React from "react";
import ProjectItem from "./ProjectItem";


const listGrid = {
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",
    gridTemplateRows:"auto",
    gridGap:"20px",
}

const ProjectList = () => {
    return(
        <div style={listGrid}>
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
        </div>
    );
}

export default ProjectList;
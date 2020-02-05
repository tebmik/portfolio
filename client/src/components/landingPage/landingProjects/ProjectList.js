import React from "react";
import ProjectItem from "./ProjectItem";


const listGrid = {
    display:"grid",
    jestifyitems:"center",
    gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",
    gridTemplateRows:"auto",
    gridGap:"20px",
    marginTop:"40px",
}

const ProjectList = () => {
    return(
        <div style={listGrid}>
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
        </div>
    );
}

export default ProjectList;
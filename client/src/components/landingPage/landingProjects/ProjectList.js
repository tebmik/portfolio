import React from "react";
import ProjectOne from "./projectItems/ProjectOne";
import ProjectTwo from "./projectItems/ProjectTwo";
import ProjectThree from "./projectItems/ProjectThree";


const listGrid = {
    display:"grid",
    justifyItems:"center",
    gridTemplateColumns:"repeat(auto-fit, minmax(230px, 1fr))",
    gridTemplateRows:"auto",
    gridGap:"20px",
    marginTop:"40px",
}

const ProjectList = () => {
  


    return(
        <div style={listGrid}>
            <ProjectOne />
            <ProjectTwo />
            <ProjectThree />
        </div>
    );
}

export default ProjectList;
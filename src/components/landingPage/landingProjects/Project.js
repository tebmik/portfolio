import React from "react";
import ProjectList from "./ProjectList";

const Project = () => {
    const pageStyle = {
        height:"100vh",
    }
    return(
        <div style={pageStyle}>
            <ProjectList />
        </div>
    );
}

export default Project;
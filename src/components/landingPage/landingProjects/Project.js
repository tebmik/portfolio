import React from "react";
import ProjectList from "./ProjectList";
import Divider from '@material-ui/core/Divider';


const Project = () => {
    const pageStyle = {
        minHeight:"100vh",
        marginBottom:"40px",
    }
    return(
        <div style={pageStyle}>
            <Divider />
            <h2 
                style={{
                    fontWeight:"100",
                    fontSize:"3rem",
                    fontFamily: "Roboto, sansSerif",
                    marginBottom:"30px",
                  }}
                >Projects
            </h2>
            <Divider />
            <ProjectList />
        </div>
    );
}

export default Project;
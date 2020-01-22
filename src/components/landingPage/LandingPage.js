import React from "react";
import Buttons from "./buttons/Buttons";
import SkillsCard from "./skills/SkillsCard";
import Project from "./landingProjects/Project";

const pageContainer = {
    padding:"0 20px",
    textAlign:"center",
    position:"relative",
    margin:"0 auto",
}

const homeHero = {
    minHeight:"100vh",
    position:"relative",
}
const heroContent = {
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    width:"100%",
    padding:"20px",
    textAlign:"left"
}

const title = {
    fontSize:"3.2em",
    fontWeight:"100",
    marginBottom:"40px",
    fontFamily:"Roboto",
    paddingLeft:"10px",
}

const span = {
    fontFamily:"Roboto",
    fontSize:"1em",
    fontStyle:"italic",
}

const LandingPage = () => {
    return(
        <div>
            <div style={pageContainer}>
                <div style={homeHero}>
                    <div style={heroContent}>
                        <h2 
                            style={title}
                        >Full Stack, 
                            <span style={span}> Modern, </span>
                            Web Developer
                        </h2>
                        <div>
                            <Buttons />
                        </div>
                    </div>
                </div>
                <div>
                    <Project />
                </div>
                <div className="skills-card-wrapper">
                    <SkillsCard />
                </div>
                
            </div>
            
        </div>
    );
}

export default LandingPage;
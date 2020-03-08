import React from "react";
import "../app.css";
const iconStyle = {
    fontSize:"2rem",
    color:"rgba(0,0,0,0.5)",
}

const Icons = () => {
    return(
        <div 
            style={{
                display:"grid",
                justifyContent:"center",
                justifyItems:"center",
                width:"200px",
                gridTemplateColumns:"1fr 1fr",
                margin:"0 auto"
            }}>
            <a href="https://www.linkedin.com/in/thomas-lloyd-3005011a3/" target="_blank" rel="noopener noreferrer">
                <i style={iconStyle} className="linkedin icon" ></i>
            </a>
            <a href="https://github.com/tebmik" target="_blank" rel="noopener noreferrer">
                <i style={iconStyle} className="github icon"></i>
            </a>
        </div>
    );
}

export default Icons;
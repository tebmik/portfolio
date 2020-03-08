import React from "react";
import Icons from "./Icons";
import Lists from "./Lists";

import Divider from '@material-ui/core/Divider';


const Footer = () => {
    
    return (
        <div 
            style={{
                display:"grid",
                alignContent:"center",
                alignItems:"center",
                height:"100%",
                // backgroundColor:"purple",
                margin:"0 auto",
                width:"100%",
                maxWidth:"1200px",
                paddingTop:"40px",
                position:"relative"
            }}>
            <Divider />
            <div 
                style={{
                    padding:"20px"
                }}
            >
                
                <Icons />
                
            </div>
            <Divider />
            <div>
                <Lists />
            </div>
            <div
            style={{
                display:"grid",
                justifyItems:"center",
                margin:"20px"
            }}>
                <span>&copy; 2020 TebMik Designs</span>
            </div>
        </div>
    );
}

export default Footer;
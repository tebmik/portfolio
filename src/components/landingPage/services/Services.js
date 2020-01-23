import React from "react";
import Divider from '@material-ui/core/Divider';

import ItemOne from "./ItemOne";
import ItemTwo from "./ItemTwo";
import ItemThree from "./ItemThree";

const para = {
    fontSize:"16px",
    fontFamily:"Montserrat, sansSerif",
    marginTop:"30px",
}


const Services = () => {
    return(
        <div className="services-wrapper">
            <div className="title-content">
                <Divider />
                <h2 
                    style={{
                        fontWeight:"100",
                        fontSize:"3rem",
                        fontFamily: "Roboto, sansSerif",
                        marginBottom:"30px",
                    }}>Services
                </h2>
                <Divider />
                <p style={para}>Understanding customer requirements, bringing consistant focus, bringing forward a great product design.</p>
            </div>
            <div className="Item item-one">
                <ItemOne />
            </div>
            <div className="Item item-two">
                <ItemTwo />
            </div>
            <div className="Item item-three">
                <ItemThree />
            </div>
        </div>
    );
}

export default Services;
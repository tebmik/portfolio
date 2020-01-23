import React from "react";

const itemWrapper = {
    textAlign:"right",
    margin:"20px",
}

const Icon = {
    fontSize:"5rem",
    color:"rgba(0,0,0,0.5)"
}

const para = {
    fontSize:"13px",
    fontFamily:"Montserrat, sansSerif",
    marginTop:"30px",
}

const ItemTwo = () => {
    return(
        <div style={itemWrapper}>
            <i style={Icon} className="circle notch icon circular"></i>
            <h5
                style={{
                    fontWeight:"100",
                    fontSize:"2rem",
                    fontFamily: "Roboto, sansSerif",
                    marginBottom:"30px",
                }}>
                User Interface Design
            </h5>
            <p style={para}>Simple, clean designs with unforgettable visuals, colours and experience.</p>
        </div>
    );
}
export default ItemTwo;
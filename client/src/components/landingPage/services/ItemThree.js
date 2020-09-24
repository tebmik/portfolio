import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const itemWrapper = {
    textAlign: "right",
    margin: "20px",
};

const Icon = {
    fontSize: "5rem",
    color: "rgba(0,0,0,0.5)",
};

const para = {
    fontSize: "13px",
    fontFamily: "Montserrat, sansSerif",
    marginTop: "30px",
};

const ItemThree = () => {
    return (
        <div style={itemWrapper}>
            <ScrollAnimation
                animateIn="fadeInUp"
                delay="500"
                animateOnce={true}>
                <i style={Icon} className="laptop icon circular"></i>
                <h5
                    style={{
                        fontWeight: "100",
                        fontSize: "2rem",
                        fontFamily: "Roboto, sansSerif",
                        marginBottom: "30px",
                    }}>
                    Design System
                </h5>
                <p style={para}>
                    Consistent look, feel and experience that will bring focus,
                    for your product.
                </p>
            </ScrollAnimation>
        </div>
    );
};
export default ItemThree;

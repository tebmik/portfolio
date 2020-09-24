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
const ItemOne = () => {
    return (
        <div style={itemWrapper}>
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <i
                    style={Icon}
                    className="address card outline icon circular"></i>
                <h5
                    style={{
                        fontWeight: "100",
                        fontSize: "2rem",
                        fontFamily: "Roboto, sansSerif",
                        marginBottom: "30px",
                    }}>
                    front-end Development
                </h5>
                <p style={para}>
                    Bring designs to life through clean code, semantic &amp;
                    accessible markup and clear CSS architectur
                </p>
            </ScrollAnimation>
        </div>
    );
};
export default ItemOne;

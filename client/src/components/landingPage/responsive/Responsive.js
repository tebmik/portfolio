import React from "react";
import Divider from "@material-ui/core/Divider";
import ScrollAnimation from "react-animate-on-scroll";

const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gridGap: "20px",
    // minHeight:"100%",
    textAlign: "left",
    // alignContent:"start",
    marginBottom: "80px",
};

const para = {
    fontSize: "16px",
    fontFamily: "Montserrat, sansSerif",
    lineHeight: "2em",
};

const Responsive = () => {
    return (
        <div style={grid}>
            <ScrollAnimation
                animateIn="fadeIn"
                animateOut="fadeOut"
                delay="200">
                <div>
                    <Divider />
                    <h2
                        style={{
                            fontWeight: "100",
                            fontSize: "3rem",
                            fontFamily: "Roboto, sansSerif",
                            marginBottom: "30px",
                        }}>
                        Fully Responsive Web Design
                    </h2>
                    <Divider />
                    <div style={{ marginTop: "40px" }}>
                        <p style={para}>
                            Flexible &amp; fluid layouts that will resize to fit
                            your device display. An essential tool for anyone
                            with a digital presence.
                        </p>
                    </div>
                </div>
            </ScrollAnimation>
            <div
                style={{
                    position: "relative",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    height: "360px",
                    overflow: "hidden",
                    objectFit: "cover",
                }}>
                <video
                    alt="devices"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                    }}
                    src="video/video.mp4"
                    autoPlay
                    loop
                    muted
                />
            </div>
        </div>
    );
};

export default Responsive;

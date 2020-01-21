import React from "react";

const ProjectItem = () => {
    return (
        <div className="ui three doubling stackable cards">
            <div className="ui card">
                <div className="image">
                    <div className="ui placeholder">
                        <div className="square image"></div>
                    </div>
                </div>
                <div className="content">
                    <div className="ui placeholder">
                        <div className="header">
                            <div className="very short line"></div>
                            <div className="medium line"></div>
                        </div>
                        <div className="paragraph">
                        <div className="short line"></div>
                    </div>
                </div>
            </div>
                <div className="extra content">
                    <div className="ui disabled primary button">Live Demo</div>
                    <div className="ui disabled button">Github</div>
                </div>
            </div>
        </div>
            
    );
}

export default ProjectItem;
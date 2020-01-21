import React from "react";

const SkillsCard = () => {
    return (
        <div className="ui four doubling cards">
            <div className="ui green card">
                <div className="image card-content">
                    <i className="desktop icon"></i>
                    <div>ReactJS</div>
                    <div>HTML5</div>
                    <div>CSS3</div>
                    <div>Javascript</div>
                </div>
            </div>
            <div className="teal card">
                <div className="image card-content">
                    <i className="server icon"></i>
                    <div>NodeJS</div>
                    <div>Express</div>
                    <div>Php</div>
                    <div></div>
                </div>
            </div>
            <div className="blue card">
                <div className="image card-content">
                    <i className="database icon"></i>
                    <div>MongoDB</div>
                    <div>MySql</div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default SkillsCard;
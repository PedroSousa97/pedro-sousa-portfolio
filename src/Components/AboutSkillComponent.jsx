import React from "react";
import "./AboutSkillComponent.css"; // Example stylesheet
import Lottie from 'lottie-react';
import PropTypes from 'prop-types';

function AboutSkillComponent({ animationData, text}) {
    return (
        <div className="skill-container">
            <div className="skill-icon">
                <Lottie
                    animationData={animationData}
                    loop={true}
                />
            </div>
            <div className="skill-text">
                <p>{text}</p>
            </div>
        </div>
    );
}

AboutSkillComponent.propTypes = {
    animationData: PropTypes.any,
    text: PropTypes.string,
};

export default AboutSkillComponent;

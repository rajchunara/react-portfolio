import React from "react";
import nodeLogo from "../../Images/logo/Node.js_logo.png";
import reactLogo from "../../Images/logo/React-logo.png";
import angularLogo from "../../Images/logo/angular-logo.png";
import reduxLogo from "../../Images/logo/redux.png";
import javascriptHtmlLogo from "../../Images/logo/html5-css-javascript.png";
import "./skills.css";

export default function SkillsComponent() {
  return (
    <div className="skills-container">
      <div className="skills-title">SKILLS</div>
      <div
        className="skills-content"
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-mirror="true"
      >
        <div className="top-bar">
          <div className="node">
            <img src={nodeLogo} alt="Node logo" />
          </div>

          <div className="react">
            <img src={reactLogo} alt="React logo" />
            <h2>React</h2>
          </div>
        </div>

        <div className="center-bar">
          <img src={javascriptHtmlLogo} alt="javascript" />
        </div>

        <div className="bottom-bar">
          <div className="angular">
            <img src={angularLogo} alt="Angular logo" />
            <h2>Angular</h2>
          </div>

          <div className="redux">
            <img src={reduxLogo} alt="Redux logo" />
            <h2>Redux</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./about.css";
import SkillsComponent from "../skills/SkillsComponent";

export default function AboutComponent() {
  return (
    <div id="aboutCmp" className="about">
      <div className="about-container  fade-in">
        <div className={`about-center`}>
          <div className="about-text">ABOUT</div>
          <div
            className="about-info-container"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-mirror="true"
          >
            <p className="about-info-1">
              Software developer who enjoys the process of transfroming ideas
              into simple yet elegant looking real world applications. In
              addition, I've had chance to work with the renowned institutions
              like TD bank and FDM group. I always strive to write clean,
              modularized and efficient code by maintaining industry standards.
            </p>

            <p className="about-info-2">
              Apart from coding, I like spending time on digital art,
              meditation, improving vector graphics skills and researching about
              latest trends in web design.
            </p>
          </div>
        </div>

        <SkillsComponent />
      </div>
    </div>
  );
}

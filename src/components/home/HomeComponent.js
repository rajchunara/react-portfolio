import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import AboutComponent from "../about/AboutComponent";
import ProjectPageComponent from "../projectsPage/ProjectsPageComponent";
import ContactComponent from "../contact/ContactComponent";
import vanillaSmoothie from "vanilla-smoothie";

export default function HomeComponent(props) {
  // const { history } = props;

  return (
    <div id="homeCmp" className="home">
      <div className="showcase">
        <div className="container showcaseInner fade-in">
          <h1>Hello, I am Raj </h1>
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("-Developer")
                  .pauseFor(1500)
                  .deleteChars(9);
                typewriter.typeString("Designer").pauseFor(1500).deleteChars(8);
                typewriter
                  .typeString("Creator")
                  .pauseFor(1500)
                  .deleteChars(7)
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="description">
            I am Toronto based software developer, who likes creating beautiful
            user interfaces and scalable applications
          </p>
          <div
            className="home-btn-container"
            onClick={() => vanillaSmoothie.scrollTo("#projectCmp")}
          >
            <a className="my-work-button" href="#projectCmp">
              <strong>View My Work</strong>
            </a>
          </div>

          <div
            className="down-arrow"
            onClick={() => vanillaSmoothie.scrollTo("#aboutCmp")}
          >
            <img src={`${process.env.PUBLIC_URL}/down-arrow.png`} alt="" />
          </div>
        </div>
        <AboutComponent />
        <ProjectPageComponent />
        <ContactComponent />
      </div>
    </div>
  );
}

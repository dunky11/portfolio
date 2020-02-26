import React from "react";
import Skills from "./Skills";
import Projects from "./Projects";

function Content() {
  return (
    <div className="content-wrapper">
      <div className="content-wrapper-inner">
        <h3 style={{ marginTop: "25vh" }}>Hey, im </h3>
        <h1> Tim von Känel </h1>
        <h3>Developer from Germany</h3>
        <div className="paper">
          <h3 className="paragraph">About Me</h3>
          <p className="paragraph">
            Hey, my name is Tim. I got two years experience in full stack web
            development both in vanilla projects and with React.
          </p>
          <p className="lg-m-bottom">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <h3 className="paragraph ">Skills</h3>
          <div className="lg-m-bottom">
            <Skills></Skills>
          </div>
          <h3 className="paragraph">Projects</h3>
          <Projects></Projects>
        </div>
      </div>
    </div>
  );
}

export default Content;

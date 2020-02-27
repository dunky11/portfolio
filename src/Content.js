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
        <div className="paper sm-mg-bottom">
          <h3 className="paragraph">About Me</h3>
          <p className="paragraph">
            Hey, my name is Tim. I got two years experience in full stack web
            development both in vanilla projects and with React.
          </p>
          <p className="lg-mg-bottom">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <h3 className="paragraph ">Skills</h3>
          <div className="lg-mg-bottom">
            <Skills></Skills>
          </div>
          <h3 className="paragraph">Projects</h3>
          <Projects></Projects>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "var(--spacing-1-negative)"
          }}
        >
          <div style={{ padding: "var(--spacing-1)" }}>
            <a
              href="https://github.com/dunky11"
              target="_blank"
              rel="noopener"
              className="avaible-on-link"
            >
              Github
            </a>
          </div>
          <div style={{ padding: "var(--spacing-1)" }}>
            <a
              href="https://stackoverflow.com/users/7161804/tim-von-k%c3%a4nel"
              target="_blank"
              rel="noopener"
              className="avaible-on-link"
            >
              Stack Overflow
            </a>
          </div>
          <div style={{ padding: "var(--spacing-1)" }}>
            <a
              href="mailto:tim.v.kaenel@web.de"
              target="_blank"
              rel="noopener"
              className="avaible-on-link"
            >
              Mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

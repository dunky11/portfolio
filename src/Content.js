import React, { Fragment } from "react";
import Skills from "./Skills";
import Projects from "./Projects";

function Content() {
  return (
    <Fragment>
      <div
        style={{
          position: "absolute",
          top: "25vh",
          left: 0,
          width: "100%",
          paddingLeft: "var(--spacing-3)",
          paddingRight: "calc(16px + var(--spacing-5))"
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative"
          }}
        >
          <h1
            style={{ marginBottom: "var(--spacing-1)" }}
            className="hide-text"
            id="intro-text-1"
          >
            <span>Hi,</span>
          </h1>
          <h1
            style={{ marginBottom: 0 }}
            className="hide-text"
            id="intro-text-2"
          >
            <span>I'm Tim.</span>
          </h1>
          <span
            style={{ fontSize: "1.8rem", opacity: 0, marginLeft: "4px" }}
            id="intro-text-3"
          >
            Full Stack Web Developer
          </span>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content-wrapper-inner">
          <div className="paper-margin">
            <div className="paper sm-mg-bottom">
              <h3 className="paragraph">About Me</h3>
              <p className="paragraph">
                Hey, my name is Tim. I got two years experience in full stack
                web development both in vanilla projects and with React.
              </p>
              <p className="lg-mg-bottom">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              <h3 className="paragraph ">Skills</h3>
              <div className="lg-mg-bottom">
                <Skills></Skills>
              </div>
              <h3 className="paragraph">Projects</h3>
              <Projects></Projects>
            </div>
          </div>
          <div className="container-1 justify-content-center">
            <div className="item">
              <a
                href="https://github.com/dunky11"
                target="_blank"
                rel="noopener noreferrer"
                className="avaible-on-link"
              >
                Github
              </a>
            </div>
            <div className="item">
              <a
                href="https://stackoverflow.com/users/7161804/tim-von-k%c3%a4nel"
                target="_blank"
                rel="noopener noreferrer"
                className="avaible-on-link"
              >
                Stack Overflow
              </a>
            </div>
            <div className="item">
              <a
                href="mailto:tim.v.kaenel@web.de"
                target="_blank"
                rel="noopener noreferrer"
                className="avaible-on-link"
              >
                Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Content;

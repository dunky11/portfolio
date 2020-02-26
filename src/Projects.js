import React, { Fragment } from "react";
import reactSaasTemplateIMG from "./reactsaastemplate.png";

const _projects = [
  {
    name: "React Saas Template",
    github: "https://github.com/dunky11/react-saas-template",
    img: reactSaasTemplateIMG,
    decription:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
  },
  {
    name: "Centralia Coin",
    github: "https://github.com/dunky11/centralia-coin",
    img: reactSaasTemplateIMG,
    decription:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
  }
];

function Projects() {
  return (
    <Fragment>
      {_projects.map((project, index) => (
        <div
          key={index}
          className={index !== _projects.length - 1 ? "md-mg-bottom" : null}
        >
          <h6
            style={{ display: "flex", alignItems: "center" }}
            className="paragraph"
          >
            {project.name}
            <i
              className="fab fa-github-square skill-social-link-icon"
              style={{ marginLeft: "var(--spacing-2)" }}
            ></i>
          </h6>
          <p className="md-mg-bottom">{project.decription}</p>
          <img
            src={project.img}
            style={{
              width: "100%",
              height: "auto",
              border: "3px solid",
              filter: "brightness(0.9)"
            }}
          ></img>
        </div>
      ))}
    </Fragment>
  );
}

export default Projects;

import React, { Fragment } from "react";
import "../css/project.css";
import reactSaasTemplateIMG from "../media/reactsaastemplate.jpg";
import centraliaCoinIMG from "../media/centralia-coin.jpg";

const _projects = [
  {
    name: "React Saas Template",
    github: "https://github.com/dunky11/react-saas-template",
    homepage: "https://reactsaastemplate.com",
    img: reactSaasTemplateIMG,
    decription:
      "Template for a react application which i created. Implements googles Material Design. Has a lot of components, like a landing page, a blog, areas to login/register an admin dashboard and image upload. Currently has around 80 stars on github."
  },
  {
    name: "Centralia Coin",
    github: "https://github.com/dunky11/centralia-coin",
    homepage: "https://dunky11.github.io/centralia-coin",
    img: centraliaCoinIMG,
    decription:
      "Basic cryptocurrency I build to learn more about the subject and which is completely usable in the browser. Uses a Bitcoin-like blockchain. The backend runs on an express server and mongoDB. The frontend is basic React."
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
          <h6 className="d-flex align-items-center paragraph">
            {project.name}
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github-square skill-social-link-icon ml-2"></i>
            </a>
          </h6>
          <p className="md-mg-bottom">{project.decription}</p>
          <div className="p-relative">
            <img
              src={project.img}
              alt="project"
              className="projectImg lazyload"
            ></img>
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="darken-image"></div>
            </a>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default Projects;

import React, { Fragment, PureComponent } from "react";
import "../css/content.css";
import Skills from "./Skills";
import Projects from "./Projects";
import isMobile from "../functions/isMobile";
import { gsap, Power4 } from "gsap/all";

const socialLinks = [
  { name: "Github", link: "https://github.com/dunky11" },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/users/7161804/tim-von-k%c3%a4nel"
  },
  { name: "Mail", link: "mailto:timv94@zedat.fu-berlin.de" }
];

class Content extends PureComponent {
  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    const tl = gsap.timeline();
    tl.to(this.introTextOne, 1.5, {
      top: 0,
      ease: Power4.easeOut
    });
    tl.to(
      this.introTextTwo,
      1.5,
      {
        top: 0,
        ease: Power4.easeOut
      },
      "-=0.5"
    );
    tl.to(this.introTextThree, 1.5, {
      opacity: 1,
      ease: Power4.easeOut
    });
    tl.to(this.paperMargin, 1, { marginTop: "90vh" }, "-=0.5");
    tl.then(() => {
      document.body.style.overflowY = "auto";
      /**
       * Scrollbar on mobile is transparent, so we wont' append the padding
       * fix here
       */
      if (!isMobile()) {
        document.documentElement.style.width = "calc(100% + 16px)";
      }
    });
  };

  render() {
    return (
      <Fragment>
        <div className="intro-text">
          <div className="intro-text-inner">
            <h1 className="hide-text mb-1">
              <span
                ref={node => {
                  this.introTextOne = node;
                }}
              >
                Hi,
              </span>
            </h1>
            <h1 className="hide-text mb-0">
              <span
                ref={node => {
                  this.introTextTwo = node;
                }}
              >
                I'm Tim.
              </span>
            </h1>
            <h5 className="intro-text-sub">
              <span
                ref={node => {
                  this.introTextThree = node;
                }}
              >
                Full Stack Web Developer
              </span>
            </h5>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-wrapper-inner">
            <div
              className="paper-margin"
              ref={node => {
                this.paperMargin = node;
              }}
            >
              <div className="paper sm-mg-bottom">
                <h3 className="paragraph">About Me</h3>
                <p className="paragraph">
                  Hey, my name is Tim. I got two years experience in full stack
                  web development both in vanilla projects and with React.
                </p>
                <p className="lg-mg-bottom">
                  I have a passion for everything computer related and currently
                  study computer science at Freie Universität Berlin.
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
              {socialLinks.map((socialLink, index) => (
                <div className="item" key={index}>
                  <a
                    href={socialLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="avaible-on-link"
                  >
                    {socialLink.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Content;

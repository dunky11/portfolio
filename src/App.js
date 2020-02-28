import React, { Fragment, PureComponent } from "react";
import "./css/app.css";
import "lazysizes";
import BlockAnimation from "./components/BlockAnimation";
import PaperPlaneAnimation from "./components/PaperPlaneAnimation";
import Content from "./components/Content";
import isMobile from "./functions/isMobile";

class App extends PureComponent {
  componentDidMount() {
    /**
     * Always scroll to top of page on page reload
     */
    window.onbeforeunload = function() {
      window.scrollTo(0, 0);
    };
    document.body.style.overflowY = "hidden";
    if (isMobile()) {
      document.querySelector(".content-wrapper").style.paddingRight =
        "var(--spacing-3)";
      document.querySelector(".intro-text").style.paddingRight =
        "var(--spacing-3)";
    }
  }

  render() {
    return (
      <Fragment>
        <Content></Content>
        <BlockAnimation></BlockAnimation>
        <PaperPlaneAnimation></PaperPlaneAnimation>
      </Fragment>
    );
  }
}

export default App;

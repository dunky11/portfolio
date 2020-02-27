import React, { Fragment, PureComponent } from "react";
import "./App.css";
import IntroSection from "./IntroSection";
import PaperPlaneAnimation from "./PaperPlaneAnimation";
import Content from "./Content";
import "lazysizes";

class App extends PureComponent {
  componentDidMount() {
    /**
     * Always scroll to top of page on page reload
     */
    window.onbeforeunload = function() {
      window.scrollTo(0, 0);
    };
    document.body.style.overflowY = "hidden";
  }

  render() {
    return (
      <Fragment>
        <Content></Content>
        <IntroSection></IntroSection>
        <PaperPlaneAnimation></PaperPlaneAnimation>
      </Fragment>
    );
  }
}

export default App;

import React, { Fragment } from "react";
import "./App.css";
import IntroSection from "./IntroSection";
import PaperPlaneAnimation from "./PaperPlaneAnimation";
import Content from "./Content";

function App() {
  /**
   * Always scroll to top of page on page reload
   */
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <Content></Content>
      <IntroSection></IntroSection>
      <PaperPlaneAnimation></PaperPlaneAnimation>
    </Fragment>
  );
}

export default App;

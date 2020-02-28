import React, { Fragment, PureComponent } from "react";
import "./css/app.css";
import BlockAnimation from "./components/BlockAnimation";
import PaperPlaneAnimation from "./components/PaperPlaneAnimation";
import Content from "./components/Content";
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
        <BlockAnimation></BlockAnimation>
        <PaperPlaneAnimation></PaperPlaneAnimation>
      </Fragment>
    );
  }
}

export default App;

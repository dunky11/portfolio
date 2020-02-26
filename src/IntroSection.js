import React, { Fragment } from "react";
import { PureComponent } from "react";
import { gsap, Power1, CSSPlugin, MotionPathPlugin } from "gsap/all";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

gsap.registerPlugin(Power1);
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(MotionPathPlugin);
ScrollMagicPluginGsap(ScrollMagic, gsap);

class IntroSection extends PureComponent {
  componentDidMount() {
    this.startAnimation();
  }
  startAnimation = () => {
    const blocks = document.querySelectorAll(".intro-animation div");
    const tween = gsap.timeline();
    blocks.forEach(block => {
      tween.to(
        block,
        0.4,
        {
          width: "100%"
        },
        "-=0.2"
      );
    });
    blocks.forEach(block => {
      tween.to(block, 0.2, {
        width: "90%"
      });
    });
    // tween.to(".content-wrapper-inner", 1, { marginTop: "90vh" });
    this.startScrollAnimation();
  };

  startScrollAnimation() {
    const tween = gsap.timeline();
    tween.to(document.querySelector(".intro-animation"), 5, {
      scaleY: "2",
      scaleX: "2",
      translateX: "75%",
      rotate: "45deg"
    });

    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      duration: 2000,
      // Trigger animation at the top of the script
      triggerHook: 0
    })
      .setTween(tween)
      // Make animation overlap screen until it's finished
      .addIndicators()
      .addTo(controller);
  }

  render() {
    return (
      <section className="intro-animation">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    );
  }
}

export default IntroSection;

import React from "react";
import { PureComponent } from "react";
import { gsap, Power1, CSSPlugin, MotionPathPlugin, Power4 } from "gsap/all";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

gsap.registerPlugin(Power1, Power4, CSSPlugin, MotionPathPlugin);
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
    tween.to("#intro-text-1 span", 1.5, {
      top: 0,
      ease: Power4.easeOut
    });
    tween.to(
      "#intro-text-2 span",
      1.5,
      {
        top: 0,
        ease: Power4.easeOut
      },
      "-=0.75"
    );
    tween.to("#intro-text-3", 1.5, {
      opacity: 1,
      ease: Power4.easeOut
    });
    tween.to(".paper-margin", 1, { marginTop: "90vh" }, "-=0.5");
    tween.then(() => {
      document.body.style.overflowY = "auto";
      document.documentElement.style.width = "calc(100% + 16px)";
    });
    this.startScrollAnimation();
  };

  startScrollAnimation() {
    const tl = gsap.timeline();
    tl.to(document.querySelector(".intro-animation"), 5, {
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
      .setTween(tl)
      // Make animation overlap screen until it's finished
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

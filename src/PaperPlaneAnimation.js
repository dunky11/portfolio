import React, { PureComponent } from "react";
import { gsap, Power1, CSSPlugin, MotionPathPlugin } from "gsap/all";
import paperPlane from "./paperPlane.png";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

gsap.registerPlugin(Power1);
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(MotionPathPlugin);
ScrollMagicPluginGsap(ScrollMagic, gsap);

class PaperPlaneAnimation extends PureComponent {
  componentDidMount() {
    this.startAnimation();
  }

  offset = el => {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  };

  startAnimation = () => {
    // const pathSmall = "M-16,107 C1,130 59,175 132,174 207,174 220,126 195,100 128,31 77,54 71,102 65,151 122,166 181,189 291,232 481,227 531,229";
    const pathLarge =
      "M-64,428 C4,520 236,700 528,696 828,696 880,504 780,400 512,124 308,216 284,408 260,604 488,664 724,756 1164,928 1924,908 2124‬,916";
    const tween = gsap.timeline();
    tween.to(".animation-paper-plane .paper-plane", 5, {
      ease: Power1.easeIn,
      motionPath: {
        path: pathLarge,
        curviness: 1.25,
        autoRotate: true
      }
    });
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: ".animation-paper-plane",
      duration: 2200,
      // Trigger animation at the top of the script
      triggerHook: 0
    })
      .setTween(tween)
      // Make animation overlap screen until it's finished
      .setPin(".animation-paper-plane")
      .addTo(controller);
  };
  render() {
    return (
      <section className="overflow-hidden animation-paper-plane-wrapper">
        <div className="animation-paper-plane">
          <div src={paperPlane} className="paper-plane">
            <img
              src={paperPlane}
              alt=""
              ref={node => {
                this.animatedElement = node;
              }}
            ></img>
          </div>
        </div>
      </section>
    );
  }
}

export default PaperPlaneAnimation;

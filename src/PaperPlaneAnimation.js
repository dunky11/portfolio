import React, { PureComponent } from "react";
import { gsap, Power1, CSSPlugin, MotionPathPlugin } from "gsap/all";
import paperPlane from "./paperPlane.png";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import flyPathSVG from "./flyPath.svg";

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
    const tween = gsap.timeline();
    tween.to(".animation-paper-plane .paper-plane", 5, {
      ease: Power1.easeIn,
      motionPath: {
        path: [
          { x: -200, y: 20 },
          { x: 500, y: 30 },
          { x: 800, y: 10 },
          { x: 1400, y: 40 }
        ],
        curviness: 4,
        autoRotate: true
      }
    });
    console.log(document.getElementById("#hgRWFimBx"));
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
              className="lazyload"
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

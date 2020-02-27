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
    const tween = gsap.timeline();
    tween.to(".animation-paper-plane .paper-plane", 5, {
      ease: Power1.easeIn,
      motionPath: {
        path: [
          { x: -200, y: -20 },
          { x: 300, y: 10 },
          { x: 500, y: 100 },
          { x: 750, y: -100 },
          { x: 350, y: -50 },
          { x: 600, y: 100 },
          { x: 800, y: 0 },
          { x: 1400, y: 25 },
          { x: 2400, y: -150 }
        ],
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

import React, { useEffect } from "react";
import gsap from "gsap";
import "./StarsAnimation.scss";

const StarsAnimation = () => {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      gsap.to(".particle", {
        left: e.clientX,
        top: e.clientY,
        stagger: -0.03,
      });
    });
  }, []);
  return (
    <div>
      <div>
        {/* <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div> */}

        {/* <h1>MOVE YOUR MOUSE ARROUND</h1> */}

        {[...Array(25)].map((_, index) => (
          <div key={index} className="particle">
            <div className="inner"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarsAnimation;

import React, { useEffect } from "react";
// import $ from "jquery";
// import { Link } from 'react-bootstrap'
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import "./Main.css";
import Typed from "typed.js";

const Home = () => {
  useEffect(() => {
    //  Typing Text Animation  //

    var typed = new Typed(".typing", {
        strings: [
            "Fullstack Developer",
            "UI Designer",
            "Student"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });

      var typed2 = new Typed(".typing-2", {
        strings: [
          "Fullstack Developer",
          "UI Designer",
          "Student"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
    

    //  Owl Carousel  //
  });

  return (
    <div>
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>

      {/* Home */}
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, This is</div>
            <div className="text-2">Suleman Khan</div>
            <div className="text-3">
              And I'm a <span className="typing"></span>
            </div>
            {/* <Link>Hire me</Link> */}
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;

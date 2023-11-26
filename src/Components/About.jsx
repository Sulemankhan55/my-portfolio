import React from "react";
import avtar from "../Images/avtar1-fotor-bg-remover-2023112222209.png"

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About Me</h2>
          <div className="about-content">
            <div className="column left">
              {/* <img src="https://source.unsplash.com/626x626/?profile" alt="Profile Image 626x626" /> */}
              <img src={avtar} alt="" />
            </div>
            <div className="column right">
              <div className="text">
                I'm Suleman Khan and I'm a <span className="typing-2"></span>
              </div>
              <p>
                I am currently employed at <b>Tekisky Pvt Ltd</b>, where I am actively
                engaged in learning and working on full-stack development..
              </p>
              <br />
              <div className="text">Why Work With Me</div>
              <p>
                {" "}
                My experience at <b>Tekisky Pvt Ltd</b> has equipped me with a solid
                foundation in the latest technologies and best practices. I am
                dedicated to delivering high-quality work and collaborating
                effectively with team members.
              </p>
              <a href="0" target="_blank">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

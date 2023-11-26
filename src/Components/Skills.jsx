import React from 'react'

const Skills = () => {
  return (
    <div>
        <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My Skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">INTERNSHIP</div>
            <ul>
              <li className="intern"><b><u>Tekisky Private Limited (Nanded) </u></b></li>
              
            </ul>

            <br />

            <div className="text">PROJECT</div>
            <ul>
              <li className="project">Portfolio (React.JS , SCSS , CSS)</li>
              <li className="project">eCommerce Website ( HTML, CSS , JavaScript)</li>
              <li className="project">Currently Working on a React eCommerce Website</li>
            </ul>

            <br />

            <div className="text">DEVELOPMENT SKILLS</div>
            <p>
              I'm familiar & work on a daily basis with HTML, CSS, JavaScript, Bootstrap, React.js
            </p>
          </div>

          <div className="column right">
           

            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="line html"></div>
            </div>

            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>90%</span>
              </div>
              <div className="line css"></div>
            </div>

            <div className="bars">
              <div className="info">
                <span>JavaScript</span>
                <span>50%</span>
              </div>
              <div className="line js"></div>
            </div>

            <div className="bars">
              <div className="info">
                <span>Bootstraps</span>
                <span>40%</span>
              </div>
              <div className="line bootstraps"></div>
            </div>

            <div className="bars">
              <div className="info">
                <span>React.JS</span>
                <span>60%</span>
              </div>
              <div className="line react"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Skills
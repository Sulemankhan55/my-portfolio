import React from "react";

const Services = () => {
  return (
    <div>
      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">My services</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-laptop-code"></i>
                <div className="text">Web Development Proficiency</div>
                <p>
                  . My expertise lies in crafting websites and applications that
                  not only meet functional requirements but also adhere to best
                  practices in web development.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-user-secret"></i>
                <div className="text">UI Design Expertise</div>
                <p>
                  My primary focus is on UI design, where I excel in creating
                  visually appealing and intuitive user interfaces. I believe in
                  the power of design to enhance user experiences and bring a
                  unique aesthetic to every project
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">Ongoing Learning in Node.js</div>
                <p>
                  At <b><u>Tekisky Pvt Ltd</u></b>, where I am currently employed, I excel in
                  UI design and web development. Moreover, I am actively
                  expanding my skill set by delving into Node.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

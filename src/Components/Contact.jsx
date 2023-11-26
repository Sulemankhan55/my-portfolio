import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact Me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>
                Feel free to get in touch with me! I'm currently working at{" "}
                <br />
                <b>
                  <u>Tekisky Pvt Ltd</u>
                </b>
                <br /> where I'm gaining valuable experience in the field of{" "}
                <br />{" "}
                <b>
                  <u>Frontend and Backend</u>
                </b>
                . <br />
                Additionally, I'm in my final year pursuing a <br />{" "}
                <b>
                  <u>Bachelor's in Computer Applications (BCA)</u>
                </b>
                . I'm eager to connect, share insights, and explore potential
                opportunities
              </p>
              <div className="icons">
                <div className="row">
                  <i className="fa-solid fa-user-large"></i>
                  <div className="info">
                    <div className="head">Name :</div>
                    <div className="sub-title">Suleman Khan</div>
                  </div>
                </div><br />

                <div className="row">
                  <i className="fa-solid fa-location-dot"></i>
                  <div className="info">
                    <div className="head">Address :</div>
                    <div className="sub-title">
                      <b>
                        Sahyog Nagar,Nanded, <br />
                        Maharashtra
                      </b>{" "}
                      431605
                    </div>
                  </div>
                </div><br />

                <div className="row">
                  <i className="fa-solid fa-envelope"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">
                      <a
                        href="mailto:#"
                        style={{ textDecoration: "none", color: "#333" }}
                      >
                        {" "}
                        sullukhan123786@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <i className="bi bi-translate"></i>
                  <div className="info">
                    <div className="head">Language Known</div>
                    <div className="sub-title">
                      Hindi, English, Marathi 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

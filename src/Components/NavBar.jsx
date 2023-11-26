import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="logo">
              <h1>My PortFolio</h1>
            </div>
            <div className="menu-items">
              <li>
                <a href="Home">Home</a>
              </li>
              <li>
                <a href="About">about</a>
              </li>
              <li>
                <a href="Blog">blogs</a>
              </li>
              <li>
                <a href="Portfolio">portfolio</a>
              </li>
              <li>
                <a href="Contact">contact</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

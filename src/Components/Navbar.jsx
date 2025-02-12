import React from 'react';
import logo from "../assets/logo.png"
import './Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="#" className="navbar-brand">
       
            <img src={logo} alt="Logo" className="navbar-logo" /> 
            {/* <span className="navbar-brand-text"></span>  */}
          </a>
        </div>
        <div className="navbar-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Events</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">My Tickets</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">About Project</a>
            </li>
          </ul>
          {/* <button className="my-tickets-btn">My Tickets →</button> */}
        </div>


        <div className="navbar-toggle">
          <div className="hamburger">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
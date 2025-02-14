import React from 'react';
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import './Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="#" className="navbar-brand">
       
            <img src={logo} alt="Logo" className="navbar-logo" /> 
           
          </a>
        </div>
        <div className="navbar-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              
            </li>
            <li className="nav-item">
              <Link to="/" href="#" className="nav-link">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">My Tickets</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-project" className="nav-link">About Project</Link>
            </li>
          </ul>
        </div>
          <button className="my-tickets-btn">My Tickets →</button>


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
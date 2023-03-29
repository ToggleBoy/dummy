import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ isHome }) => {
  if (isHome) {
    return (
      <div className="forHome">
        <ul>
          <li>
            <NavLink to="/" className='hover-underline'>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className='hover-underline'>About</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className='hover-underline'>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className='hover-underline'>Contact Me</NavLink>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="notHome">
        <div className="logo-div">
          <NavLink to="/">RK</NavLink>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/" className='hover-underline'>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className='hover-underline'>About</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className='hover-underline'>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className='hover-underline'>Contact Me</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default NavBar;

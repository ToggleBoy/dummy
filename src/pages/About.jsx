import React from "react";
import NavBar from "../components/layout/Navbar";
import "./About.css";
import About_section from "../components/ui/About/sections/about_section";
import About_content from "../components/ui/About/sections/about_content";

const About = () => {
  return (
    <div className="about">
      <NavBar />
      <About_section />
      <hr className="about_hr1" />
      <About_content />
    </div>
  );
};

export default About;

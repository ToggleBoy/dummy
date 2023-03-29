import React from "react";
import { v4 as uuidv4 } from "uuid";
import Experience_section from "../elements/Experience_section";
import Qualification_tree from "../elements/Qualification_tree";
import SkillPopover from "../elements/SkillPopover";

const skillList = [
  "Python",
  "JavaScript",
  "React.js",
  "PostgreSQL",
  "HTML",
  "CSS",
  "C++",
  "Figma",
];

const About_content = () => {
  return (
    <div className="contents">
      <div className="skills section_title">
        <h3>Skills</h3>
        {skillList.map((list) => (
          <SkillPopover data={list} key={uuidv4()} />
        ))}
      </div>
      <hr className="about_hr1" />
      <div className="Experience">
        <h3>Experience</h3>
        <Experience_section />
      </div>
      <hr className="about_hr1" />
      <div className="qualification">
        <h3>Education</h3>
        <Qualification_tree />
      </div>
      <hr className="about_hr1" />
    </div>
  );
};

export default About_content;

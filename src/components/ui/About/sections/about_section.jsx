import React from "react";
import Button from "react-bootstrap/Button";
import git from "../../../../assets/git.png";
import resume from "../../../../assets/resume.png";

const About_section = () => {
  return (
    <div className="intro">
      <div className="section_title">
        <h1>About</h1>
      </div>
      <div className="section_icons">
        <div>
          <Button
            variant="primary"
            size="lg"
            disabled
            className="section_button"
          >
            Software Developer
          </Button>
        </div>
        <div className="doc_icons">
          <a
            href="https://www.github.com/toggleboy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt="Git HUB" />
          </a>
          <a
            href="https://drive.google.com/file/d/1Tse-K_PEZnbQ5mcYrWV2FcX_ZUDQwLdZ/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={resume} alt="Resume" />
          </a>
        </div>
      </div>

      <p>
        Hi, This is Radhakrishnan a Curious Lad for Tamilnadu - India. I can
        build complete End - End web application using React.js for front - end,
        Node.js for back - end, PostgreSql for database and so on...
      </p>
    </div>
  );
};

export default About_section;

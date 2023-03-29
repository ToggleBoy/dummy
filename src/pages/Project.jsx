import React from "react";
import NavBar from "../components/layout/Navbar";
import Password_Manager from "../components/ui/projects/Password_Manger";
import WiggyOmato from "../components/ui/projects/WIggyOmato";
import "./Project.css";

const Project = () => {
  return (
    <div className="project">
      <NavBar />
      <div className="content">
        <div className="section_title intro">
          <h1>Projects</h1>
          <p>
            These are few projects which are done by Me during self-taught of
            programming languages and Web development. Go on feel free to test
            or use these project and share your thoughts.
          </p>
        </div>
        <Password_Manager />
        <WiggyOmato />
      </div>
    </div>
  );
};

export default Project;

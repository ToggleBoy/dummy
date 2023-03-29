import React from "react";
import Button from "react-bootstrap/Button";
import Pwd_png from "../../../assets/password.png";

const Password_Manager = () => {
  return (
    <div className="project-left">
      <div className="description">
        <h1>Password Manager</h1>
        <hr className="hr-1" />
        <p>
          Using Pure Python Programming Language with tkinter GUI. This project has
          been done. The Data's are been stored in json file format. Try to Add
          the Data first in the PassWord_Manager and then search it.
        </p>
        <hr className="hr-2" />
        <Button variant="success" className="project-link">
          <a
            href="https://github.com/ToggleBoy/PassWord_Manager"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </Button>
      </div>
      <div>
        <img src={Pwd_png} alt="projectimage" width={200} height={200} />
      </div>
    </div>
  );
};

export default Password_Manager;

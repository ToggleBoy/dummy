import React from "react";
import Button from "react-bootstrap/Button";
import Wo_png from "../../../assets/WiggyOmato.png";

const WiggyOmato = () => {
  return (
    <div className="project-right">
      <div>
        <img src={Wo_png} alt="projectimage" width={200} height={200} />
      </div>
      <div className="description">
        <h1>WiggyOmato</h1>
        <hr className="hr-1" />
        <p>
          It's a Basic food Ordering WebApp with responsive cart button/icon. This
          WebApp is created using React.js and using hooks functionality Concepts.
        </p>
        <hr className="hr-2" />
        <Button variant="success" className="project-link">
          <a
            href="https://toggleboy.github.io/WiggyOmato"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </Button>
      </div>
    </div>
  );
};

export default WiggyOmato;

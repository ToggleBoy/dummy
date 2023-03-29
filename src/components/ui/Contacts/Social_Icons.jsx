import React from "react";
import fb from "../../../assets/facebook.png";
import Insta from "../../../assets/instagram.png";
import linkedin from "../../../assets/linkedin.png";
import twitter from "../../../assets/twitter.png";

const Social_Icons = () => {
  return (
    <div className="contacts-icons">
      <a
        href="https://www.linkedin.com/in/radhakrishnan-jayaraman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="li" />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={fb} alt="fb" />
      </a>
      <a
        href="https://www.instagram.com/toggle.boy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Insta} alt="insta" />
      </a>
      <a
        href="https://www.twitter.com/Rk3128"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="twitter" />
      </a>
    </div>
  );
};

export default Social_Icons;

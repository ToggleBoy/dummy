import React from "react";
import NavBar from "../components/layout/Navbar";
import india_png from "..//assets/india.png";
import "./Contacts.css";
import Social_Icons from "../components/ui/Contacts/Social_Icons";
import Form_section from "../components/ui/Contacts/Form_section";

const Contacts = () => {
  return (
    <div className="contacts">
      <NavBar />
      <h1>Contact Me</h1>
      <p>Reach me Out through Social Media</p>

      <h5>Email:- radhakrisnan3128@gmail.com</h5>
      <h5>Ph. no.:- +91 86673 51498</h5>
      <Social_Icons />
      <hr className="contacts-hr1" />
      <div className="contacts-section">
        <div className="loaction">
          <h3>Location</h3>
          <div className="address">
            <h2>Radhakrishnan Jayaraman</h2>
            <p>No. 48, LIG TNHB,</p>
            <p>Seekarajapuram Ranipet,</p>
            <p>TamilNadu - 632515.</p>
            <img src={india_png} alt="flag" className="india-png" />
          </div>
        </div>
        <div className="form-section">
          <h3>Form</h3>
          <Form_section />
        </div>
      </div>
    </div>
  );
};

export default Contacts;

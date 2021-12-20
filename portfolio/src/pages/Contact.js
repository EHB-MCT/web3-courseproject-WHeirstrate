import React from "react";
import "./styles/Contact.css";
import profile from "../assets/profile.png";

import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <>
      <h1 className="appTitle">Get in touch!</h1>
      <div className="contactContainer">
        <img src={profile} alt="Mijn profielfoto" className="image" />
        <div className="contactDetail">
          <div className="contactItem">
            <AiOutlinePhone className="contactIcon" />
            <a className="contactLink" href="tel:00487482911">
              0487482911
            </a>
          </div>
          <div className="contactItem">
            <HiOutlineMail className="contactIcon" />
            <a
              className="contactLink"
              href="mailto:wouter.heirstrate@student.ehb.be"
              target="_blank"
              rel="noreferrer"
            >
              wouter.heirstrate@student.ehb.be
            </a>
          </div>
          <div className="contactItem">
            <HiOutlineMail className="contactIcon" />
            <a
              className="contactLink"
              href="wouter.heirstrate@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              wouter.heirstrate@gmail.com
            </a>
          </div>
          <div className="contactItem contactSocialsContainer">
            <a
              href="https://github.com/WHeirstrate"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className="contactIcon" />
            </a>
            <a
              href="https://twitter.com/WHeirstrate"
              target="_blank"
              rel="noreferrer"
            >
              <FiTwitter className="contactIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/wouter-heirstrate-1a0560178/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin className="contactIcon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

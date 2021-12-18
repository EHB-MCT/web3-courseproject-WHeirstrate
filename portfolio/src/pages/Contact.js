import React from "react";
import { Link } from "react-router-dom";
import "./styles/Contact.css";

export default function Contact() {
  return (
    <>
      <h1 className="appTitle">Get in touch!</h1>
      <div className="contactContainer">
        <p className="contactString">
          Je kan me steeds bereiken op mijn{" "}
          <a href="mailto:wouter.heirstrate@student.ehb.be" target="_blank">
            email
          </a>{" "}
          of op mijn{" "}
          <a href="tel:0032487482911" target="_blank">
            gsm
          </a>
          .
        </p>
        <p className="explanation">
          Dat is het, eigenlijk. Wil je meer over me weten, ga dan terug naar de{" "}
          <Link className="homeLink" to="/">
            Homepagina
          </Link>
          .
        </p>
      </div>
    </>
  );
}

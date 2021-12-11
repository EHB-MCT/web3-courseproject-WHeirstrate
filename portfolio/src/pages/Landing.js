import React from "react";
import { Link } from "react-router-dom";
import "./styles/Landing.css";

export default function Landing() {
  return (
    <div className="appContainer">
      <h1 className="appTitle">Wouter Heirstrate</h1>
      <nav className="navContainer">
        <Link className="navItem" to="/career">
          Career
        </Link>
        <Link className="navItem" to="/education">
          Education
        </Link>
        <Link className="navItem" to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}

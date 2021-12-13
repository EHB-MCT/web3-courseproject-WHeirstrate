import React from "react";
import { Link } from "react-router-dom";
import SketchComponent from "../components/SketchComponent";
import "./styles/Landing.css";

export default function Landing() {
  return (
    <div className="appContainer">
      <h1 className="appTitle">Get to know me!</h1>
      {/*       <p className="personalName">Wouter Heirstrate</p>
       */}
      <nav className="navContainer">
        <Link className="navItem" to="/career">
          <SketchComponent text={"Career"} />
        </Link>
        <Link className="navItem" to="/skills">
          <SketchComponent text={"Skills"} />
        </Link>
        <Link className="navItem" to="/contact">
          <SketchComponent text={"Contact"} />
        </Link>
      </nav>
    </div>
  );
}

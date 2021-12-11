import React from "react";
import { Link } from "react-router-dom";
import Spotify from "../components/Spotify";
import "./styles/NotFound.css";

export default function NotFound() {
  return (
    <div className="notFoundContainer">
      <h1 className="notFoundTitle">Nothing to find here</h1>
      <Link className="Go Back" to="/">
        Back to Black - Amy Winehouse
      </Link>
      <Spotify />
    </div>
  );
}

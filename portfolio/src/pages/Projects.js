import React from "react";
import profielPicture from "../assets/profile.png";
import "./styles/Projects.css";

export default function Projects() {
  const myAge = calculateAge();
  console.log(myAge);
  function calculateAge() {
    const date = new Date();
    if (date.getDay < 11 && date.getMonth < 9) return date.getFullYear() - 2001;
    return date.getFullYear() - 2001 + 1;
  }
  return (
    <div className="appContainer">
      <h1 className="appTitle">Get to know me!</h1>
      <div className="detailsContainer"></div>
    </div>
  );
}

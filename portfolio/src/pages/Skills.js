import React from "react";
import { skills } from "../data.json";
import Card from "../components/Card";
import "./styles/Skills.css";

export default function Skills() {
  const color = "#5523A7";

  const template = skills.map((element) => {
    return <Card data={element} color={color} />;
  });

  return (
    <div>
      <h1 className="appTitle">Mijn vaardigheden</h1>
      <div className="cardsContainer">{template}</div>
    </div>
  );
}

import React from "react";
import Carousel from "framer-motion-carousel";
import Image from "../components/Image";
import { projects } from "../data.json";

import "./styles/Projects.css";

export default function Projects() {
  function log(s) {
    console.log(s);
  }

  return (
    <div className="appContainer" style={{ overflow: "hidden" }}>
      <h1 className="appTitle">Get to know me!</h1>
      <div className="projectsContainer">
        <Carousel
          loop={true}
          autoPlay={true}
          interval={5000}
          className="carousel"
        >
          {projects.map((item, i) => (
            <div onClick={() => window.open(item.github, "_blank")}>
              <Image image={item.image} item={item} />
              <h1 className="projectTitle">{item.name}</h1>
              <p className="projectDescription">{item.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

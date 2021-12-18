import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaChild } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { BiFirstAid } from "react-icons/bi";
import { career } from "../data.json";
import "./styles/Carreer.css";

export default function Career() {
  const template = career.map((element) => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={element.date}
        dateClassName={"timelineDate"}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
        icon={element.icon}
      >
        <h3 className="vertical-timeline-element-title">{element.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {element.subTitle}
        </h4>
        <p>{element.text}</p>
      </VerticalTimelineElement>
    );
  });

  return (
    <div>
      <h1 className="appTitle">My work experience</h1>
      <VerticalTimeline>{template}</VerticalTimeline>
    </div>
  );
}

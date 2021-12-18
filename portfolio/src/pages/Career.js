import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { career } from "../data.json";

import { FaChild } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { BsCodeSlash } from "react-icons/bs";
import { BiFirstAid } from "react-icons/bi";
import { AiOutlineQuestionCircle, AiOutlineStar } from "react-icons/ai";
import "./styles/Carreer.css";

export default function Career() {
  let icon;
  let color;
  const template = career.map((element) => {
    switch (element.icon) {
      case "school":
        icon = <IoIosSchool />;
        color = "#82B6FF";
        break;
      case "code":
        icon = <BsCodeSlash />;
        color = "#82B6FF";
        break;
      case "child":
        icon = <FaChild />;
        color = "#FF9668";
        break;
      case "ehbo":
        icon = <BiFirstAid />;
        color = "red";
        break;
      default:
        icon = <AiOutlineQuestionCircle />;
        color = "black";
    }
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          borderTop: `5px solid ${color}`,
          color: "#000",
        }}
        contentArrowStyle={{
          borderRight: "7px solid",
          borderRightColor: color,
        }}
        date={element.date}
        dateClassName={"timelineDate"}
        iconStyle={{
          border: `3px solid ${color}`,
          background: "#E3E3E3",
          color: "#000",
        }}
        icon={icon}
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
      <h1 className="appTitle">Mijn werkervaring</h1>
      <VerticalTimeline className="timeline">
        {template}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<AiOutlineStar />}
        />
      </VerticalTimeline>
    </div>
  );
}

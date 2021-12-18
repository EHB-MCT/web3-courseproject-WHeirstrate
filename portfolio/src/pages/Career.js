import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaChild } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { BiFirstAid } from "react-icons/bi";
import "./styles/Carreer.css";

export default function Career() {
  return (
    <>
      <h1 className="appTitle">My work experience</h1>
      <VerticalTimeline>
        {/* MIDDELBAAR -- OPLEIDING*/}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="sep 2013 -- 12 jaar"
          dateClassName={"timelineDate"}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BsCodeSlash />}
        >
          <h3 className="vertical-timeline-element-title">Atheneum Boom</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Boom, Antwerpen
          </h4>
          <p>
            Start van mijn middelbare schoolcarrière. Latijn was mijn eerste
            keuze, wegens mijn interesse in talen en geschiedenis.
          </p>
        </VerticalTimelineElement>
        {/* ANIMATOR IN HET JEUGDWERK -- DIPLOMA*/}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid #fff" }}
          date="15 jaar -- februari 2016"
          dateClassName={"timelineDate"}
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<FaChild />}
        >
          <h3 className="vertical-timeline-element-title">
            Animator in het Jeugdwerk (Stage)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">VDS, Antwerpen</h4>
          <p>
            Na een week lang een animatorencursus gevolgd te hebben en twee
            weken stage te lopen bij een erkend speelplein, heb ik mijn attest
            behaald bij de Vlaamse Dienst Speelpleinwerken (VDS).
          </p>
        </VerticalTimelineElement>
        {/* EHBO DIPLOMA*/}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid #fff" }}
          date="mei 2018 -- 17 jaar"
          dateClassName={"timelineDate"}
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<BiFirstAid />}
        >
          <h3 className="vertical-timeline-element-title">EHBO attest</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Boom, Antwerpen
          </h4>
          <p>
            In 16 uur les in totaal heb ik mijn Eerste Hulp examen en attest
            gehaald op school.
          </p>
        </VerticalTimelineElement>
        {/* HOOFDANIMATOR IN HET JEUGDWERK -- DIPLOMA*/}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid #fff" }}
          date="mei 2018 -- 17 jaar"
          dateClassName={"timelineDate"}
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<FaChild />}
        >
          <h3 className="vertical-timeline-element-title">
            Hoofdanimator in het jeugdwerk
          </h3>
          <h4 className="vertical-timeline-element-subtitle">VDS, Antwerpen</h4>
          <p>
            Na een week theorie en daarna een week lang alleen een speelplein
            leiden, heb ik het hoogst mogelijk attest behaald in het jeugdwerk.
            Dit heb ik behaald bij de Vlaamse Dienst Speelpleinwerken (VDS).
          </p>
        </VerticalTimelineElement>
        {/* MIDDELBAAR AFMAKEN -- OPLEIDING*/}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid #fff" }}
          date="mei 2018 -- 17 jaar"
          dateClassName={"timelineDate"}
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<FaChild />}
        >
          <h3 className="vertical-timeline-element-title">
            Afstuderen middelbaar
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Boom, Antwerpen
          </h4>
          <p>6 jaar</p>
        </VerticalTimelineElement>
        {/* EHB BEGINNEN -- OPLEIDING*/}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid #fff" }}
          date="mei 2018 -- 17 jaar"
          dateClassName={"timelineDate"}
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<FaChild />}
        >
          <h3 className="vertical-timeline-element-title">
            Hoofdanimator in het jeugdwerk
          </h3>
          <h4 className="vertical-timeline-element-subtitle">VDS, Antwerpen</h4>
          <p>
            Na een week theorie en daarna een week lang alleen een speelplein
            leiden, heb ik het hoogst mogelijk attest behaald in het jeugdwerk.
            Dit heb ik behaald bij de Vlaamse Dienst Speelpleinwerken (VDS).
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

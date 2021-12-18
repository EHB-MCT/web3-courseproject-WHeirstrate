import React, { useState } from "react";
import "./styles/Card.css";
//import { AiFillHtml5 } from "react-icons/ai";
//import { SiJavascript } from "react-icons/si";

export default function Card({ data, color }) {
  const [select, setSelect] = useState(false);
  let logo;

  //if (data.icon === "html") logo = <AiFillHtml5 />;
  //else if (data.icon === "js") logo = <SiJavascript />;

  //function setText() {
  //  setSelect(!select);
  //}

  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(0deg, ${color} ${
          data.percentage - 5
        }%, #e3e3e3 ${data.percentage}%)`,
      }}
      //onClick={setText}
    >
      {select ? logo : <h1 className="cardTitle">{data.name}</h1>}
    </div>
  );
}

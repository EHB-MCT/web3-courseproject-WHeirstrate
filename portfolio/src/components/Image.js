import React from "react";
import ReactTooltip from "react-tooltip";

export default function Image({ image, item }) {
  const myStyle = {
    height: "400px",
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div data-tip={`${item.name} (click for Github)`} style={myStyle}></div>
      <ReactTooltip place="top" backgroundColor="rgb(85, 35, 167)" />
    </>
  );
}

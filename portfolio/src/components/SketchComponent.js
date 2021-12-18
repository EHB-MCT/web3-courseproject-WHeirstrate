import React, { useState } from "react";
import Sketch from "react-p5";

export default function SketchComponent({ text, width, height, position }) {
  const [hover, setHover] = useState(false);

  const x_margin = 120;
  const y_margin = 20;
  let x_hover = 0;
  let y_hover = 0;

  const setup = (p5, canvasParentRef) => {
    const canvas = p5.createCanvas(width, height).parent(canvasParentRef);
    p5.textSize(22);
    p5.textFont("Open Sans");
    p5.fill(255);
    p5.noLoop();
    canvas.mouseOver(() => {
      setHover(true);
      p5.loop();
    });
    canvas.mouseOut(() => {
      setHover(false);
      p5.noLoop();
    });
  };

  const draw = (p5) => {
    position === "odd"
      ? p5.background(85, 35, 167)
      : p5.background(110, 70, 175);
    if (hover) {
      if (
        p5.pmouseX >= x_margin &&
        p5.pmouseX <= width - x_margin &&
        p5.pmouseY >= y_margin &&
        p5.pmouseY <= width - y_margin
      ) {
        p5.text(text, x_hover, y_hover);
        x_hover = p5.mouseX - 50;
        y_hover = p5.mouseY;
      } else {
        p5.text(text, width / 2 - 50, height / 2 + 9);
      }
    } else {
      p5.text(text, width / 2 - 50, height / 2 + 9);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}

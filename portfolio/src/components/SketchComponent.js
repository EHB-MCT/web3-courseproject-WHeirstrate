import React, { useState } from "react";
import Sketch from "react-p5";

export default function SketchComponent({ text, width, height }) {
  const [hover, setHover] = useState(false);

  const x_margin = 35;
  const y_margin = 15;
  let x_hover = 0;
  let y_hover = 0;

  const setup = (p5, canvasParentRef) => {
    const canvas = p5.createCanvas(width, height).parent(canvasParentRef);
    p5.textSize(25);
    p5.textFont("Fuzzy Bubbles");
    p5.fill(0);
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
    p5.background(149, 179, 206);
    if (hover) {
      if (
        p5.pmouseX >= x_margin &&
        p5.pmouseX <= width - x_margin &&
        p5.pmouseY >= y_margin &&
        p5.pmouseY <= width - y_margin
      ) {
        p5.text(text, x_hover, y_hover);
        x_hover = p5.mouseX - 20;
        y_hover = p5.mouseY;
      } else {
        p5.text(text, width / 2 - 28, height / 2 + 9);
      }
    } else {
      p5.text(text, width / 2 - 28, height / 2 + 9);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}

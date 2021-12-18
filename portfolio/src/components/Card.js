import React from "react";
import "./styles/Card.css";

export default function Card({ data, color }) {
  return (
    <div className="card">
      <h1 className="cardTitle">{data.name}</h1>
      {data.percentage ? (
        <>
          <p class="progressLabel">{data.percentage}%</p>
          <div
            className="progressBar"
            style={{
              background: `linear-gradient(90deg, ${color} ${
                data.percentage - 5
              }%, #e3e3e3 ${data.percentage}%)`,
            }}
          />
        </>
      ) : null}
    </div>
  );
}

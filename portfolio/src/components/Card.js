import React from "react";
import "./styles/Card.css";

export default function Card({ data, color }) {
  return (
    <div className="card">
      <h1 className="cardTitle">{data.name}</h1>
      {data.percentage ? (
        <>
          <div
            className="progressBar"
            style={{
              background: `linear-gradient(90deg, ${color} ${
                data.percentage - 5
              }%, #b599e5 ${data.percentage}% )`,
            }}
          />
          <p class="progressLabel">{data.percentage}%</p>
        </>
      ) : null}
    </div>
  );
}

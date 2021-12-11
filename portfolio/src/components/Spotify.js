import React from "react";
import SpotifyLogo from "../assets/spotify.png";
import "./styles/Spotify.css";

export default function Spotify() {
  return (
    <div className="logoContainer">
      <img className="logoImg" src={SpotifyLogo} alt="Spotify Logo" />
    </div>
  );
}
